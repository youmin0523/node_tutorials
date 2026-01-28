const router = require('express').Router(); // express 에서 제공하는 라우트 메서드 저장
const salesMapController = require('../controllers/salesMapController');

router.get('/sales_map', salesMapController.getSalesMap);

module.exports = router;
