const Router = require('express');
const router = new Router();
const Type = require('../controllers/Type');

router.get('/', Type.getAll);
router.post('/', Type.create);

module.exports = router;
