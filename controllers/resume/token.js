const Joi = require('@hapi/joi');
const axios = require('axios');

module.exports.post = async (req, res, next) => {
  try {
    const gitHubBackend = axios.create({ baseURL: 'https://github.com' });
    const { data } = gitHubBackend.post('/login/oauth/access_token', req.body);
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
}