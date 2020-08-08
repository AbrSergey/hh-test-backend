const router = require('express').Router();
const { validate } = require('../middleware');
const { users } = require('../controllers');

router.get('/users', users.get);
router.post('/users', validate(users.schema), users.post);

module.exports = router;