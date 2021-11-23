const Router = require('express');
const router = new Router();
const Brand = require('../controllers/Brand');

router.get('/', Brand.getAll);
router.post('/', Brand.create);

module.exports = router;
