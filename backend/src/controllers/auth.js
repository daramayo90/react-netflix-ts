const User = require('../models/User');
const bcrypt = require("bcryptjs");

const controller = {
    /* POST: User to register */
    register: async function (req, res) {
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
    },

    /* POST: User to login */
    login: async function (req, res) {
        try {
            const user = await User.findOne({ email: req.body.email });
    
            !user && res.status(401).json("Wrong password or username");
    
            let checkPassword = bcrypt.compareSync(req.body.password, user.password);
    
            if (checkPassword) {
                res.status(200).json(user);
            } else {
                res.status(401).json("Wrong password or username");
            }
    
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

module.exports = controller;