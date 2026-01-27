const router = require('express').Router(); // express 에서 제공하는 라우트 메서드 저장
const visitorsController = require('../controllers/visitorsController');

router.get('/visitors', visitorsController.getVisitors);

module.exports = router;
