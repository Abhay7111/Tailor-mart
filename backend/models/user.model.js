const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required : true,
    },
    location : {
        type : String,
    },
    phone : {
        type : Number,
        required : true,
    },
    userId : {
        type : String,
        unique : true
    },
    isVerifiedUser : {
        type : Boolean,
        default : false
    }
})

module.exports = mongoose.model("user", userSchema); 