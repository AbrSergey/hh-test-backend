const { mongoose } = require('../connect');
const Schema = mongoose.Schema;

const users = new Schema({
  name:{ type: String },
  surname:{ type: String },
  email:{ type: String }
});

users.statics.get = async function(){
  let count = this.countDocuments({}).exec();
  let data = this
    .find({})
    .sort({ createdAt: 'asc' })
    .exec();

  [ count, data ] = await Promise.all([ count, data ]);

  return {
    count,
    data
  };
};


module.exports.users = mongoose.model('users', users);
