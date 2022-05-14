const mongoose = require('./db')
const userSchema = new mongoose.Schema({
    username :String,
    password :String
})
const userModel = mongoose.model("user",userSchema,"user")
module.exports = userModel