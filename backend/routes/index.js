var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var bcrypt = require('bcrypt');
var con = require('../database/con');
const { render } = require('pug');

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.session.flag == 1) {
    req.session.destroy();
    res.render('index', { title: 'Nrealniurb', message : 'Email Already Exists', flag : 1 });
  } else if (req.session.flag == 2) {
    req.session.destroy();
    res.render('index', { title: 'Nrealniurb', message : 'Registration Done. Please Login.', flag : 0 });
  } else if (req.session.flag == 3) {
    req.session.destroy();
    res.render('index', { title: 'Nrealniurb', message : 'Confrim Passowrd Does Not Match.', flag : 1 });
  } else if (req.session.flag == 4) {
    req.session.destroy();
    res.render('index', { title: 'Nrealniurb', message : 'Incorrect Email or Passord.', flag : 1});
  } else {
    res.render('index', { title: 'Nrealniurb' });
  }
});

//Handle POST request for User Registration
router.post('/auth_reg', function(req, res, next){
  var fullname = req.body.fullname;
  var email = req.body.email;
  var password = req.body.password;
  var cpassword = req.body.cpassword;

  if(cpassword == password) {
    var sql = 'select * from user where email = ?;';
    con.query(sql, [email], function(err, result, fields){
      if(err) throw err;
      if(result.length > 0) {
        req.session.flag = 1;
        res.redirect('/')
      }
      else {
        var hashpassword = bcrypt.hashSync(password,10);
        var sql = 'insert into user(fullname,email,password) values(?,?,?);';
        con.query(sql,[fullname,email,hashpassword], function(err,result,fields){
          if (err) throw err;
          req.session.flag = 2;
          res.redirect('/');
        });
      }
    });
  } else {
    req.session.flag = 3;
    res.redirect('/');
  }
});


router.post('/new_post', function(req,res,next){
  var content = req.body.content;
  var sql = 'insert into post_time (cont) values(?);';
  con.query(sql,[content], function(err,result,fields){
    if (err) throw err;
    res.redirect('/home');
  });
});



// Handle POST request for User Login
router.post('/auth_login', function(req,res,next){
  var email = req.body.email;
  var fullname = req.body.fullname;
  var password = req.body.password;
  var sql = 'select * from user where email = ?;';
  con.query(sql,[email], function(err,result,fields) {
    if(err) throw err;
    if(result.length && bcrypt.compareSync(password,result[0].password)) {
      req.session.fullname = result[0].fullname;
      req.session.email = email;
      res.redirect('/home')
    } else {
      req.session.flag = 4;
      res.redirect('/');
    }
  });
});

router.post('/new_course', function(req,res,next){
  var lecture = req.body.lecture;
  var course = req.body.course;
  var email = req.body.email;
  var sql = 'insert into course_log (lecture, course_name, email) values(?,?,?);';
  con.query(sql,[lecture, course, email], function(err,result,fields){
    if (err) throw err;
    res.redirect('/home');
  });
});

router.post('/classmate_search', function(req,res,next){
  var lecture = req.body.lecture;
  var course = req.body.course;
  var sql = 'select * from course_log where course_name = ?;';
  con.query(sql,[course, lecture], function(err,result,fields){
    var rows = [];
    if (err) throw err;
    if (result.length == 0) {
      res.render('result', {message : 'No Classmate Found', rows : result,})
    }
    else {
      res.render('result', {
        message : 'We Have Found You These Classmates',
        rows : result,
      })
    }
  });
});

router.post('/say_hi', function(req,res,next){
  var message = req.body.message;
  var email = req.session.email;
  var receiver = req.body.receiver;
  var sql = 'insert into message (sender, receiver, message) values(?,?,?);';
  con.query(sql,[email, receiver, message], function(err,result,fields){
    if (err) throw err;
    res.render('message')
  });
});

//Route for home page
router.get('/home', function(req, res, next){
  var sql = 'select * from post_time order by id desc;';
  con.query(sql, function(err,result,next) {
    if (err) throw err;
    res.render('home', {
      message : 'Welcome, ' + req.session.fullname, 
      email : req.session.email,
      rows : result,
    })
  });
});

//Route for new_post page
router.get('/new_post', function(req,res,next){
  res.render('board')
});



//Route for new_post page
router.get('/classmate_search', function(req,res,next){
  res.render('classmate')
});


router.post('/message_center', function(req,res,next){
  var receiver = req.body.receiver;
  var sql = 'select * from message where receiver = ?;';
  con.query(sql,[receiver], function(err,result,fields){
    var rows = [];
    if (err) throw err;
    if (result.length == 0) {
      res.render('message_center', {message : 'No New Messages !', rows : result,})
    }
    else {
      res.render('message_center', {
        message : 'You Have New Messages !',
        email : receiver,
        rows : result,
      })
    }
  });
});

router.post('/mark_read', function(req,res,next){
  var email = req.body.email;
  console.log(email)
  var sql = 'delete from message where receiver = ?;';
  con.query(sql,[email], function(err,result,fields){
    var rows = [];
    if (err) throw err;
    res.render('message_center', {message : 'No New Messages !', rows : [],})
  });
});



//Route for new_post page
router.get('/new_course', function(req,res,next){
  res.render('course')
});


router.get('/logout', function(req,res,next){
  if(req.session.email) {
    req.session.destroy();
  }
  res.redirect('/');
})
module.exports = router;
