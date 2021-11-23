const Router = require('express');
const router = new Router();
const brand = require('./brand');
const device = require('./device');
const type = require('./type');
const user = require('./user');

router.use('/brand', brand);
router.use('/device', device);
router.use('/type', type);
router.use('/user', user);

module.exports = router;
