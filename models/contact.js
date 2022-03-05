const mongoose = require("mongoose");


const ContactSchema = new mongoose.Schema({
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
    Messages : {
        type: String,
        required: true,
        trim: true,
    },

});

const contact = mongoose.model("contact", ContactSchema,"contact");
module.exports = contact;