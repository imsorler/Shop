const Router = require('express');
const router = new Router();
const User = require('../controllers/User');

router.post('/registration', User.registration);
router.post('/login', User.login);
router.get('/auth', User.check);

module.exports = router;
