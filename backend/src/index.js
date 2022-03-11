const mongoose = require('mongoose');
const express = require("express");
const app = express();

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://daramayo90:react-netflix-ts@cluster0.oaf7u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
}

app.listen(8800, () => {
    console.log("Backend server is running");
});