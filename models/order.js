const mongoose = require("mongoose");


const OrderSchema = new mongoose.Schema({
    MaSoOrder : {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    TenKhachHang : {
        type: String,
        required: true,
        trim: true,
    },
    SoLoaiHangTrongDon : {
        type: Number,
        default : 1,
        validate: {
            validator: function(value) {
                return (value>0);
            },
            message: "Negative SoLoaiHangTrongDon !",
        },

    },
    TongSotien : {
        type: Number,
        default : 0,
        validate: {
            validator: function(value) {
                return (value>0);
            },
            message: "Negative TongSotien !",
        },

    },
    ThoiGianMua : {
        type: Date,
        default : "2021-10-20",
    },
    MaSoNV : {
        type: String,
        required: true,
        trim: true,
        uppercase: true,
    },

});

const Order = mongoose.model("Order", OrderSchema,"Order");
module.exports = Order;