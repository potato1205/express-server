var express = require('express');
var router = express.Router();
var URL = require('url');  

var UserModule = require('./user.js'); 

var db = require('../config/db');

// var User = UserModule.User;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/getUserInfo', function(req, res, next) {

  var user = new Object();
  var params = URL.parse(req.url, true).query;

if(params.id == '1') {

  user.name = "ligh";
  user.age = "1";
  user.city = "北京市";

}else{  
  user.name = "SPTING";
  user.age = "1";
  user.city = "杭州市";
}

var response = {status:1,data:{user: user}};
res.send(JSON.stringify(response));
});

router.post('/insertUserInfo', function(req, res, next) {
  console.log(res.body);
  db.query('', function(err,rows) {

  });
});

module.exports = router;
