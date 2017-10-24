var express = require('express');
var mongoose = require('mongoose');
var BankRecord = require('../models/BankRecord')
var router = express.Router();
var flash = require('connect-flash');


//COMPLETE: grab data form database and display in client: src/EditBankData.js
router.post('/', function(req, res, next) {

  for (let obj of req.body.data) {
    obj['TransDate'] = obj['Trans Date'];
    obj['Amount'] = obj['\t\t\tAmount'];
    obj['PostDate'] = obj['Post Date' || 'Posting Date'];
    obj['CheckNumber'] = obj['Check or Slip #'];
    delete obj['Trans Date'];
    delete obj['\t\t\tAmount'];
    delete obj['Post Date'];
  }
  let item = req.body.data;
  console.log(item);
  let trans = []
  for (var i = 0; i < 100; i++) {
    console.log(item[i]);
    trans.push(item[i]);
    BankRecord.create(item[i]);
  }
})

router.put('/change', function(req, res, next){
    console.log("/change in put route");
    console.log("req: ", req.body.data);
    console.log("category: ", req.body.Category)
    let id = req.body.data;
    let Category = req.body.Category;
    BankRecord.update(
      {_id: id},
      {Category: Category},
       function(err, item){
        if(err) res.json(err);
        else res.end();
    });
});

/* GET display all the bank records */
router.get('/', function(req, res, next) {
  console.log('in the /bankData route get');
  BankRecord.find({}, function(err, records){
      if(err) return res.send(err);
      res.send(records);
  });
});

/* GET specific record from bank records by id */
router.get('/:recordId', function(req, res, next) {
    console.log('in the /bankRecords/:recordId route get');

    BankRecord.findById(req.params.recordId, function(err, record){
        if(err) return res.send(err);
        res.send(record);
    });
});

//COMPLETE: user can delete specific transaction from database
router.put('/', function(req, res, next){
    console.log("req: ", req.body.data);
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

//user can assign specific record to his savings, needs button on front end, isSaved is eather undefined or true if we hit this route...
router.put('/:recordId/:toSave', function(req, res, next){
    BankRecord.findByIdAndUpdate(req.params.recordId,
        { $set: {isSaved: true}},
        function(err, record) {
            if (err) return res.send(err);
            res.send(record);
        }
    );
});


// //////////////////////////NOT SURE WE NEED THIS ROUTE///////////////
router.get('/savedList', function(req, res, next){
    console.log("router.get('/savedList,...) in routes on server");
    BankRecord.find({ isSaved: true }, function(err, records){
        if(err) return res.send(err);
        res.send(records);
    });
});


//using node export syntex
module.exports = router;
