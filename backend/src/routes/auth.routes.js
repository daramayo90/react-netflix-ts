const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require("bcryptjs");

//Register
router.post('/register', async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
    });

    try {
        const user = await newUser.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
})

//Login
router.post('login', (req, res) => {
    
})

module.exports = router;