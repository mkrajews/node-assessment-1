// All your server code and endpoints should be in this file
var express =  require('express');
var bodyParser = require('body-parser');
var users = require('./users.js');
var userCtrl = require('./userCtrl.js');
// var users = require('./users.js');

var app = express();

app.use(bodyParser.json());

app.get('/api/users', userCtrl.readAll);
app.get('/api/users/:userId', function(req, res, next) {
  userCtrl.findUserById(req.params.userId, function(err, res) {
    if(err) {
      res.status(200).json(err);
    }else {
      res.json(res);
    }
  });
}),
app.get('/api/admins', function(req, res, next) {
  userCtrl.getAdmins(function() {
    if(res) {
      res.json(res);
    }else {
      res.status(200).json(res);
    }
  });
}),
app.get('/api/nonadmins', function(req, res, next) {
  userCtrl.getNonAdmins(function(err, res) {
    if(err) {
      res.status(200).json(err);
    }else {
      res.json(res);
    }
  });
}),
app.get('/api/users/', function(req, res, next) {
  userCtrl.getUsersByFavorite(req.query.favorite, function(err, res) {
    if(err) {
      res.status(200).json(err);
    }else {
      res.json(res);
    }
  });
}),
app.get('/api/users', function(req, res, next) {
  userCtrl.getUsersByAgeLimit(req.query.age, function(err, age) {
    if(err) {
      res.status(200).json(err);
    }else {
      res.json(age);
    }
  });
}),
// app.get('/api/users', function(req, res, next) {
//   userCtrl.findUserByQuery()
// })
app.post('/api/users/', function(req, res, next) {
  userCtrl.createUser(req.body, function(err, res) {
    if(err) {
      res.status(200).json(err);
    }else {
      res.json(res);
    }
  });
}),
app.put('/api/users/:id', function(req, res, next) {
  userCtrl.createUser(req.params.id, function() {
    if(err) {
      res.status(200).json(err);
    }else {
      res.json(res);
    }
  });
}),
app.delete('/api/users/:id', function(req, res, next) {
  userCtrl.removeUser(req.params.id, function() {
    if(err) {
      res.status(200).json(err);
    }else {
      res.json(res);
    }
  })
})











app.listen(3000, function() {
  console.log('successfully listening');
});

module.exports = app;
