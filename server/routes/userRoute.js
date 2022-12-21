const Router = require('express');
const router = new Router();

const userController = require('../controllers/userControlller');

router.use('/login', userController.login);

module.exports = router;