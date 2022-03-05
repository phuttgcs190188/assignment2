const mongoose = require("mongoose");


const ProductSchema = new mongoose.Schema({
    MaSP : {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    TenSP : {
        type: String,
        required: true,
        trim: true,
    },
    NhomSP : {
        type: String,
        required: true,
        trim: true,
    },
    MoTa : {
        type: String,
        default : "",
        trim: true,
    },
    BaoHanh : {
        type: Number,
        default : 0,
        validate: {
            validator: function(value) {
                return (value>0);
            },
            message: "Negative Bao Hanh !",
        },

    },
    GiaBan : {
        type: Number,
        default : 0,
        validate: {
            validator: function(value) {
                return (value>0);
            },
            message: "Negative GIA BAN !",
        },

    },
    GiaGoc : {
        type: Number,
        default : 0,
        validate: {
            validator: function(value) {
                return (value>0);
            },
            message: "Negative GIA GOC !",
        },

    },
    NhaSX : {
        type: String,
        default : "",
        trim: true,
    },
    NamSX : {
        type: Number,
        default : 0,
        validate: {
            validator: function(value) {
                return (value>0);
            },
            message: "Negative Bao Hanh !",
        },

    },
    Model : {
        type: String,
        default : "",
        trim: true,
        uppercase : true,
    },
    Links : {
        type: String,
        default : "",
        trim: true,
    },

});

const Product = mongoose.model("Product", ProductSchema,"Product");
module.exports = Product;