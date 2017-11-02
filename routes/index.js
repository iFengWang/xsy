var express = require('express');
var router = express.Router();

var Post = require('../models/post');

/* GET home page. */
router.get('/', function(req, res, next) {
  // insertPost(res);
  showAllPost(res);
  // deletePost(res);
  // updatePost(res);
  // res.render('index', { title: 'Express' , docs:null});
});

router.post('/', function(req,res, next) {
  insertPost(req,res,next);
});

//业务逻辑************************************************
function insertPost(req,res,next) {
  var p = new Post({
    mobile:'17799999999',
    post:req.body.message,
    time:new Date()
  });

  // p.save(function(err, docs) {
  //   if (err) {
  //     console.log("Error:" + err);
  //   }
  //   else {
  //       console.log("docs:" + docs);
  //   }
  // });

  Post.create(p, function(err, docs) {
    if (err) {
      console.log("Error:" + err);
    }
    else {
        console.log("docs:" + docs);
    }
    showAllPost(res);
  });

  // Post.insertMany([],function(err, docs) {});
}

function deletePost(res) {
  Post.remove({mobile:'17722222222'},function(err, docs) {
    if (err) {
      console.log("Error:" + err);
    }
    else {
        console.log("docs:" + docs);
    }
    showAllPost(res);
  });
}

function updatePost(res) {
  Post.update({mobile:'17711111111'},{post:'new-new-new-new-new-new'},function(err, docs) {
    if (err) {
      console.log("Error:" + err);
    }
    else {
        console.log("docs:" + docs);
    }
    showAllPost(res);
  });
}

function showAllPost(res) {
  Post.find({}, function (err, docs) {
    if (err) {
      console.log("Error:" + err);
    }
    else {
        // console.log("docs:" + docs);
        res.render('index', { title: 'Express', docs: docs});
    }
  });
}

module.exports = router;
