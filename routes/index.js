const router = require('express').Router();
const { validate } = require('../middleware');
const { users, resume } = require('../controllers');

router.get('/users', users.get);
router.post('/users', validate(users.schema), users.post);

// routes for mvp-crash-course
router.get('/resume/:guid/social_links', resume.socalLinks.get);
router.get('/resume/:guid/general_information', resume.generalInformation.get);
router.get('/resume/:guid/skills', resume.skills.get);
router.get('/resume/:guid/education', resume.education.get);

module.exports = router;