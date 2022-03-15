const mongoose = require('mongoose');

const UserModel = new mongoose.Schema({
    username: {
        type: Number,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        default: ""
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
},
    { typestamps: true }
);

module.exports = mongoose.model("User", UserModel);