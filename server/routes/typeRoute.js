const Router = require('express');
const router = new Router();

const typeController = require('../controllers/typeController');

router.post('/create', typeController.create);
router.post('/delete', typeController.delete);
router.get('/get', typeController.get);

module.exports = router;