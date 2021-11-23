const Router = require('express');
const router = new Router();
const Device = require('../controllers/Device');

router.get('/', Device.getAll);
router.get('/:id', Device.getOne);
router.post('/', Device.create);

module.exports = router;
