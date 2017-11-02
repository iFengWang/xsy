var express = require('express');
var router = express.Router();

var Post = require('../models/post');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  insertPost();
});

function insertPost() {
  var p = new Post({
    mobile:'17722222222',
    post:'好人一生平安，好大一个家大中国',
    time:new Date()
  });

  p.save(function(err, res) {
    if (err) {
      console.log("Error:" + err);
    }
    else {
        console.log("Res:" + res);
    }
  });
}

module.exports = router;
