var express = require('express');
var mongoose = require('mongoose');
var BankRecord = require('../models/BankRecord')
var router = express.Router();
var flash = require('connect-flash');


//COMPLETE: grab data form database and display in client: src/EditBankData.js
router.post('/', function(req, res, next) {
  for (let obj of req.body.data) {
    obj['CheckNumber'] = obj['Check or Slip #'];
    obj['TransDate'] = obj['Trans Date'];
    obj['PostDate'] = obj['Post Date'];
    obj['PostedDate'] = obj['Posting Date'];
    delete obj['Trans Date'];
    delete obj['Post Date'];
    delete obj['Posting Date'];
  }
  let item = req.body.data;
  console.log("item in router.post: ", item);
  //TODO: add user ID to item
  //will have to make sure that it's
    //adding a new key/value pair
  let trans = []
  for (var i = 0; i < item.length; i++) {
    trans.push(item[i]);
    // console.log("trans in for loop: ", trans)
    console.log("item[i]: ", item[i])
    BankRecord.create(item[i], function(err, item) {
      if(err) console.log("error: ", error)
      else console.log("item: ", item)
    });
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


// ////////////////////////////////////////////////////////////////
// // WE PROBABLY DON'T NEED THIS
// ////////////////////////////////////////////////////////////////
// //user can assign specific record to his savings, needs button on front end, isSaved is eather undefined or true if we hit this route...
// router.put('/:recordId/:toSave', function(req, res, next){
//     BankRecord.find(req.params.recordId,
//         { $set: {isSaved: true}},
//         function(err, record) {
//             if (err) return res.send(err);
//             res.send(record);
//         }
//     );
// });

router.get('/savedList', function(req, res, next){
    console.log("router.get('/savedList,...) in routes on server");
    BankRecord.find({ isSaved: true }, function(err, records){
        if(err) return res.send(err);
        console.log(records);
        res.send(records);
    });
});

//COMPLETE: get route to display saved item in AllSavings.js
router.get('/SavingsSummary/:user', function(req, res, next){
  let user = req.params.user
  console.log("userId in savings route: ", user);
    BankRecord.find({
      isSaved: 'true',
      userId: user
    }, function(err, records){
        if(err) return res.send(err);
        console.log("results of SavingsSummary get: ", records);
        res.send(records);
    })
});

// COMPLETE: need this to add savedlist items to db - from EnterSavings.js
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


//COMPLETE: GET display all the bank records
  //moved from top of page
router.get('/:user', function(req, res, next) {
  let user = req.params.user
  console.log("userId in BankRecords routes: ", user);
  BankRecord.find({userId: user}, function(err, records){
      if(err) return res.send(err);
      res.send(records);
  });
});

// //user can assign specific record to his specific category, needs button/href/stimulation on front end
// router.put('/:recordId/category/:categoryId', function(req, res, next){
//     BankRecord.findByIdAndUpdate(req.params.recordId,
//         { $set: {categoryId: req.params.categoryId}},
//         function(err, record) {
//             if (err) return res.send(err);
//             res.send(record);
//         }
//     );
// });

////////////////////////////////////////////////////////////////
// WE PROBABLY DON'T NEED THIS
////////////////////////////////////////////////////////////////
//user can assign specific record to his savings, needs button on front end, isSaved is eather undefined or true if we hit this route...
// router.put('/:recordId/:toSave', function(req, res, next){
//     BankRecord.find(req.params.recordId,
//         { $set: {isSaved: true}},
//         function(err, record) {
//             if (err) return res.send(err);
//             res.send(record);
//         }
//     );
// });



////////////////////////////////////////////////////////////////
// WE PROBABLY DON'T NEED THIS
////////////////////////////////////////////////////////////////
//COMPLETE: get route to display saved item in AllSavings.js
// router.get('/SavingsSummary', function(req, res, next){
//     BankRecord.find({isSaved: true}, function(err, records){
//         if(err) return res.send(err);
//         console.log(records);
//         res.send(records);
//     })
// });

//using node export syntex
module.exports = router;
