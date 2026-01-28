const router = require('express').Router(); // express 에서 제공하는 라우트 메서드 저장
const topProductsController = require('../controllers/topProductsController');

router.get('/top_products', topProductsController.getTopProducts);

module.exports = router;
