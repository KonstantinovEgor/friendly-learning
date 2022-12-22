const Router = require('express');
const router = new Router();

const userController = require('../controllers/userControlller');

router.post('/login', userController.login);
router.post('/registration', userController.registration);
router.post('/auth', userController.auth);

module.exports = router;