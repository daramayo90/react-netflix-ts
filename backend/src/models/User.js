const mongoose = require('mongoose');

const UserModel = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePicture: { type: String, default: "" },
    isAdmin: { type: Boolean, default: false }
},
    { typestamps: true }
);

module.export = mongoose.model("User", UserModel);