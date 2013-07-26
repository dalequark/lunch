var User = require('../lib/model')('users');

User.schema = {
  name: 'String'
};

module.exports = User;