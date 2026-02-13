const router = require('express').Router();
const { postAuth } = require('../controllers/postAuthControllers');
const upload = require('./upload');

router.post('/register', upload.single('profile_image'), postAuth);

module.exports = router;
