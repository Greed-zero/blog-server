const mongoose = require('./db')
const tagsSchema = new mongoose.Schema({
    tag :String,
})
const tagsModel = mongoose.model("tags",tagsSchema,"tags")
module.exports = tagsModel