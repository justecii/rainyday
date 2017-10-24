var express = require('express');
var mongoose = require('mongoose');
var Category = require('../models/Category')
var router = express.Router();

// var isLogedIn = function(){
//     // if (!req.user) {
//     //     req.flash('error', 'You must be logged in to access that page');
//     //     res.redirect('/auth/login');
//     //   } else {
//     //     next();
//     //   }
// }

/* GET categories list */
router.get('/', function(req, res, next) {
  console.log('in the /categories route get');
  //find all categories documents
  Category.find({}, function(err, categories){
      if(err) return res.send(err);
      res.send(categories);
  });
});

/* GET specific category by id */
router.get('/:categoryId', function(req, res, next) {
    console.log('in the /categoryId route get');
    
    Category.findById(req.params.categoryId, function(err, category){
        if(err) return res.send(err);
        res.send(category);
    });
  });

router.post('/', function(req, res, next){
    console.log('in the /categories post');
    Category.create({
        name: req.body.name,
        // userId: req.user.id
        userId: 10
    }, function(err, categoryr){
        if(err) return res.send(err);
        res.send(category);
    })
});

router.put('/:categoryId', function(req, res, next){
    Category.findByIdAndUpdate(req.params.categoryId, 
        { $set: {name: req.body.name}},
        function(err, category) {
            if (err) return res.send(err);
            res.send(category)
        }
    );
});
router.delete('/:categoryId', function(req, res, next){
    Category.findByIdAndRemove(req.params.categoryId, function(err) {
        if (err) return res.send(err);
        console.log('CategoryId deleted!');
        res.redirect('/categories');
    });
})
    


//using node export syntex
module.exports = router;