const router = require('express').Router(); // express 에서 제공하는 라우트 메서드 저장
const revenueController = require('../controllers/revenueController');

router.get('/revenue', revenueController.getRevenue);

module.exports = router;
