var express = require('express');
var mongoose = require('mongoose');
var BankRecord = require('../models/BankRecord')
var router = express.Router();
var flash = require('connect-flash');
//COMPLETE: grab data form database and display in client: src/EditBankData.js
router.post('/', function(req, res, next) {
  for (let obj of req.body.data) {
    obj['TransDate'] = obj['Trans Date'];
    // obj['Amount'] = obj['\t\t\tAmount'];
    obj['PostDate'] = obj['Post Date'];
    obj['PostedDate'] = obj['Posting Date'];
    obj['CheckNumber'] = obj['Check or Slip #'];
    delete obj['Trans Date'];
    // delete obj['\t\t\tAmount'];
    delete obj['Post Date'];
    delete obj['Posting Date'];
  }
  let item = req.body.data;
  //TODO: add user ID to item
  //will have to make sure that it's
    //adding a new key/value pair
  let trans = []
  for (var i = 0; i < 100; i++) {
    trans.push(item[i]);
    BankRecord.create(item[i]);
  }
})
//COMPLETE: Edit transactions in EditBankData/js and send changes to db
router.put('/change', function(req, res, next){
    let id = req.body.data;
    let Category = req.body.Category;
    BankRecord.update(
      {_id: id},
      {Category: Category},
       function(err, item){
        if(err) res.json(err);
        else res.send(item);
    });
});
//COMPLETE: GET display all the bank records
router.get('/', function(req, res, next) {
  BankRecord.find({}, function(err, records){
      if(err) return res.send(err);
      res.send(records);
  });
});
// /* GET specific record from bank records by id */
// router.get('/:recordId', function(req, res, next) {
//     BankRecord.findById(req.params.recordId, function(err, record){
//         if(err) return res.send(err);
//         res.send(record);
//     });
// });
//COMPLETE: delete from db - coming from AllSavings.js
router.put('/', function(req, res, next){
    let id = req.body.data
    BankRecord.findByIdAndRemove({_id: id},
       function(err, item){
        if(err) res.json(err);
        else res.end();
    });
});
//user can assign specific record to his specific category, needs button/href/stimulation on front end
router.put('/:recordId/category/:categoryId', function(req, res, next){
    BankRecord.findByIdAndUpdate(req.params.recordId,
        { $set: {categoryId: req.params.categoryId}},
        function(err, record) {
            if (err) return res.send(err);
            res.send(record);
        }
    );
});
////////////////////////////////////////////////////////////////
// WE PROBABLY DON'T NEED THIS
////////////////////////////////////////////////////////////////
//user can assign specific record to his savings, needs button on front end, isSaved is eather undefined or true if we hit this route...
router.put('/:recordId/:toSave', function(req, res, next){
    BankRecord.find(req.params.recordId,
        { $set: {isSaved: true}},
        function(err, record) {
            if (err) return res.send(err);
            res.send(record);
        }
    );
});
////////////////////////////////////////////////////////////////
// WE PROBABLY DON'T NEED THIS
////////////////////////////////////////////////////////////////
router.get('/savedList', function(req, res, next){
    console.log("router.get('/savedList,...) in routes on server");
    BankRecord.find({ isSaved: true }, function(err, records){
        if(err) return res.send(err);
        console.log(records);
        res.send(records);
    });
});
// TODO: need this to add savedlist items to db - from EnterSavings.js
router.post('/savedList', function(req, res, next){
     let item = req.body.data;
     console.log("item: ", item);
     BankRecord.create(
         item
     , function(err, record){
         if(err) return res.send(err);
         res.send(record);
    })
 })
//COMPLETE: get route to display saved item in AllSavings.js
router.get('/SavingsSummary', function(req, res, next){
    BankRecord.find({isSaved: true}, function(err, records){
        if(err) return res.send(err);
        console.log(records);
        res.send(records);
    })
});
//using node export syntex
module.exports = router;
