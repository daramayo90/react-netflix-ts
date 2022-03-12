const router = require('express').Router();
const controller = require('../controllers/user');
const verifyToken = require('../middlewares/verifyToken');

/* Users CRUD */
router.get('/find/:id', controller.get);
router.put('/:id', verifyToken, controller.update);
router.delete('/:id', controller.delete);

module.exports = router;