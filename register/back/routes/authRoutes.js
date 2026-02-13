const router = require('express').Router();
const { postAuth, postLogin } = require('../controllers/postAuthControllers');
const upload = require('./upload');

router.post('/register', upload.single('profile_image'), postAuth);
router.post('/login', postLogin);

module.exports = router;
