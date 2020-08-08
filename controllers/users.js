const Joi = require('@hapi/joi');
const { users } = require('../db');

module.exports.schema = (body) => {
  return Joi.object().keys({
    name: Joi.string().min(3).max(30).required(),
    surname: Joi.string().min(3).max(50).required(),
    email: Joi.string().email({ tlds: { allow: false } })
  })
}

module.exports.get = async (req, res, next) => {
  try {
    let { count, data } = await users.get();

    data = data.map(obj => ({
      name: obj.name,
      surname: obj.surname,
      email: obj.email
    }));
    
    res.status(200).json({ count, data });
  } catch (err) {
    next(err);
  }
}

module.exports.post = async (req, res, next) => {
  try {
    const mongo = new users({
      name: req.body.name,
      surname: req.body.surname,
      email: req.body.email
    });
    await mongo.save();

    res.status(200).json({ success: true });
  } catch (err) {
    next(err);
  }
}