const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
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
    },
    FullName : {
        type: String,
        required: true,
        trim: true,
    },
    Email : {
        type: String,
        default : "",
        required: true,
        trim: true,
    },
    PhoneNumber : {
        type: Number,
        default : "",
        required: true,
        trim: true,
    },
    

});

const user = mongoose.model("user", UserSchema,"user");
module.exports = user;