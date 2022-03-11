const mongoose = require('mongoose');
const express = require("express");
const app = express();

const authRoute = require('./routes/auth.routes');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://daramayo90:react-netflix-ts@cluster0.oaf7u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
    console.log("DB Connection Ok");
}

app.use(express.json());

app.use('/api/auth', authRoute);

app.listen(8800, () => {
    console.log("Backend server is running");
});