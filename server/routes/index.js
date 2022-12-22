const Router = require('express');
const router = new Router();

const userRoute = require('./userRoute');
const typeRoute = require('./typeRoute');

router.use('/user', userRoute);
router.use('/type', typeRoute);

module.exports = router;