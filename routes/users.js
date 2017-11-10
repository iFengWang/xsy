var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  // res.writeHead(200,{'Content-Type':'application/json'});

  var obj = {
    name:'xiaofeng',
    age:'30',
    sex:'男',
    height:300,
    array:[
      {class:'一班',level:'1'},
      {class:'二班',level:'2'},
      {class:'三班',level:'3'},
      {class:'四班',level:'4'}
    ]
  };

  res.send(JSON.stringify(obj));

  var buffer1 = new Buffer([85]);
  console.log('sss......'+buffer1.toString('utf8'));

  var buffer2 = new Buffer(8);
  buffer2.write('a','utf8');
});

module.exports = router;
