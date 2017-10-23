var express = require('express');
var mongoose = require('mongoose');
// var Category = require('../models/BankData')
var router = express.Router();



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


//////////////////////////NOT SURE WE NEED THIS ROUTE///////////////
router.get('/:toSave', function(req, res, next){
    BankRecord.find({ isSaved: true }, function(err, records){
        if(err) return res.send(err);
        res.send(records);
    });
});

//using node export syntex
module.exports = router;
