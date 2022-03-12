const User = require('../models/User');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

const controller = {

    get: async function (req, res) {
        try {
            const user = await User.findById(req.params.id);
            const { password, ...info } = user._doc;
            res.status(200).json(info);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    update: async function (req, res) {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            if (req.body.password) {
                bcrypt.hashSync(req.body.password, 10);
            }

            try {
                const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
                res.status(200).json(updatedUser);

            } catch (error) {
                res.status(500).json(error);
            }
        } else {
            res.status(403).json("You can update only your account");
        }
    },

    /* Only the user or the admin can delete it */
    delete: async function (req, res) {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            try {
                const updatedUser = await User.findByIdAndDelete(req.params.id);
                res.status(200).json("User has been deleted");

            } catch (error) {
                res.status(500).json(error);
            }
        } else {
            res.status(403).json("You can delete only your account");
        }
    }
}

module.exports = controller;