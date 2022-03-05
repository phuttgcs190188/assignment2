const mongoose = require("mongoose");


const LoginSchema = new mongoose.Schema({
    UserName : {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    Password : {
        type: String,
        required: true,
        trim: true,
    }

}, { collection: 'login' }
);

const Login = mongoose.model("Login", LoginSchema,"Login");
module.exports = Login;





