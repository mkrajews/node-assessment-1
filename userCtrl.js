// You will write your endpoints and export each one from this file
var users = require('./users.js');

module.exports = {

  readAll: function() {
    return users.find();
  },
  findUserById: function(userId) {
    return users.findOne('id', userId);
  },
  getAdmins: function() {
    return users.find('type', 'admin');
  },
  getNonAdmins: function() {
    return users.find('type', 'user');
  },

  // weird one:
  getUsersByFavorite: function(favorite) {
    return users.find('favorites', favorite)
  },
  getUsersByAgeLimit: function(age) {
    return users.find('age', age);
  },
  findUserByQuery: function(q, val) {
    if (q == 'last_name') {
      return users.find('last_name', val);
    } else if (q == 'email') {
      return users.find('email', val);
    } else if (q == 'type') {
      return users.find('type', val);
    } else if (q == 'state') {
      return users.find('state', val);
    }
  },
  createUser: function(user) {
    var user = {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      gender: user.gender,
      language: user.language,
      age: user.age,
      city: user.city,
      state: user.state,
      type: user.type,
      favorites: user.favorites
    }
    return users.add(user);
  },
  updateUser: function(id, obj) {
    return users.update('id', id, obj);
  },
  removeUser: function(id) {
    return users.remove('id', id);
  }


};
