const router = require('express').Router();
const controller = require('../controllers/auth');

/* Authentication Users for Register and Login routes */
router.post('/register', controller.register);
router.post('/login', controller.login);

module.exports = router;