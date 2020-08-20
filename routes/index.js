const router = require('express').Router();
const { validate } = require('../middleware');
const { users, resume } = require('../controllers');

router.get('/users', users.get);
router.post('/users', validate(users.schema), users.post);

// routes for mvp-crash-course
router.get('/resume/social_links', resume.socialLinks.get);
router.get('/resume/general_information', resume.generalInformation.get);
router.get('/resume/skills', resume.skills.get);
router.get('/resume/education', resume.education.get);

module.exports = router;