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

/* COMPLETE: GET display all the bank records */
router.get('/', function(req, res, next) {
  BankRecord.find({}, function(err, records){
      if(err) return res.send(err);
      res.send(records);
  });
});

/* GET specific record from bank records by id */
router.get('/:recordId', function(req, res, next) {
    BankRecord.findById(req.params.recordId, function(err, record){
        if(err) return res.send(err);
        res.send(record);
    });
});

//COMPLETE: user can delete specific transaction from database
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
//////////////////////////////
////AJ EDITED TO TEST, CAN CHANGE///
////////////////////////
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


// //////////////////////////NOT SURE WE NEED THIS ROUTE///////////////
router.get('/savedList', function(req, res, next){
    console.log("router.get('/savedList,...) in routes on server");
    BankRecord.find({ isSaved: true }, function(err, records){
        if(err) return res.send(err);
        console.log(records);
        res.send(records);
    });
});
////////////////////////////////////////////////////////////////
//AJ ADDED THIS BC HE MUST HAVE ACCIDENTALLY DELETED IT SOMEHOW
//IT IS PROBABLY STILL IN THE MASTER FILE
////////////////////////////////////////////////////////////////
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

 router.delete('/savedList/:recordId', function(req, res, next){
    console.log('deleting record');
    BankRecord.findByIdAndRemove(req.params.recordId, function(err) {
        if (err) return res.send(err);
        console.log('RecordId deleted!');
        res.redirect('/bankRecords/savedList');
    });
})
////////////////////////////////////////////////////////////////
//AJ ADDED THIS TO DISPLAY DATA IN SAVINGSSUMARY.JS IN CLIENT///
////////////////////////////////////////////////////////////////
router.get('/SavingsSummary/:id', function(req, res, next){
    console.log("SavingsSummary Route...");
    console.log("savingssummary route: ", req.body);
    BankRecord.find({isSaved: true}, function(err, records){
        if(err) return res.send(err);
        console.log(records);
        res.send(records);
    })
});



//using node export syntex
module.exports = router;
