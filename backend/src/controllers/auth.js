const User = require('../models/User');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
require('dotenv').config();

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
        } catch (error) {
            res.status(500).json(error);
        }
    },

    /* POST: User to login */
    login: async function (req, res) {
        try {
            const user = await User.findOne({ email: req.body.email });

            !user && res.status(401).json("Wrong password or username");

            let checkPassword = bcrypt.compareSync(req.body.password, user.password);
            
            //Check password and remove the field before send the JSON information
            //Generate an acess token with jwt.sign
            if (checkPassword) {
                const accessToken = jwt.sign({
                    id: user.id, isAdmin: user.isAdmin },
                    process.env.SECRET_KEY,
                    { expiresIn: "5d" });
                    
                const { password, ...info } = user._doc;

                res.status(200).json({...info, accessToken});
            } else {
                res.status(401).json("Wrong password or username");
            }

        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = controller;