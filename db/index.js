const { url } = require('../config').db;
const { connect } = require('./lib/connect');
const { users } = require('./lib/models/users');

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  poolSize: 4
};

connect(url, options).catch(err => console.log(`\x1b[31m[logger-module]: ${err}`));

module.exports.users = users;