const mongoose = require('mongoose');
let mongo = new mongoose.Mongoose();

mongo.connection.on('connected', function () {
  console.log('\x1b[32m%s\x1b[0m','\nConnected to MongoDb: OK');
});

mongo.connection.on('error', function (err) {
  console.log(`\x1b[31m \n[logger-module]: Connection ${err}`);
});

mongo.connection.on('disconnected', function () {
  console.log('\x1b[31m \n[logger-module]: Mongo disconnected');
});

module.exports.connect = async (url, options) => {
  return mongo.connect(url, options);
};

module.exports.mongoose = mongo;
