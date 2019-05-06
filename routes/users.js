var express = require('express');
var router = express.Router();
var URL = require('url');

var UserModule = require('./user.js');

var db = require('../config/db');

// var User = UserModule.User;

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/getUserInfo', function (req, res, next) {

  // var user = new Object();
  // var params = URL.parse(req.url, true).query;

  // if (params.id == '1') {

  //   user.name = "ligh";
  //   user.age = "1";
  //   user.city = "北京市";

  // } else {
  //   user.name = "SPTING";
  //   user.age = "1";
  //   user.city = "杭州市";
  // }


  // var response = { status: 1, data: { user: user } };
  db.query('select * from users', function (err, rows) {
    if (err) {
      // res.render("users", { title: "用户列表", datas: [] });
      var response = { title: "用户列表", datas: err };
      res.send(JSON.stringify(response));
    } else {
      var response = { title: "用户列表", datas: rows };
      res.send(JSON.stringify(response));
      // res.render("users", { title: "用户列表", datas: rows });
    }
  });

  // console.log('db: ', db.query('dasa'));
  
});

router.post('/insertUserInfo', function (req, res, next) {
  console.log(res.body);
  db.query('select * from users', function (err, rows) {
    if (err) {
      res.render("users", { title: "用户列表", datas: [] });
    } else {
      res.render("users", { title: "用户列表", datas: rows });
    }
  });
});

module.exports = router;
