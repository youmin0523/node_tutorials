const router = require('express').Router(); // express 에서 제공하는 라우트 메서드 저장
const targetRealityController = require('../controllers/targetRealityController');

router.get('/target_reality', targetRealityController.getTargetReality);

module.exports = router;
