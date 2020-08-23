const Joi = require('@hapi/joi');
const axios = require('axios');

module.exports.post = async (req, res, next) => {
  try {
    const { data } = await axios({
      method: 'POST',
      url: 'https://github.com/login/oauth/access_token',
      data: req.body
    });

    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
}