const router = require('express').Router();
const controller = require('../controllers/auth');

//Register
router.post('/register', controller.register);

//Login
router.post('/login', controller.login);

module.exports = router;