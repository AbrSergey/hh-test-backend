const Joi = require('@hapi/joi');
const axios = require('axios');

module.exports.post = async (req, res, next) => {
  try {
    const { data } = await axios({
      method: 'POST',
      url: 'https://github.com/login/oauth/access_token',
      data: req.body
    });

    let access_token;
    if (data.indexOf('access_token=') !== -1) {
      access_token = data.substring('access_token='.length, data.indexOf('&scope='));
    }
    else throw new Error(data);
    
    res.status(200).json({ access_token });
  } catch (err) {
    next(err);
  }
}