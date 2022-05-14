const mongoose = require('./db')
const articleSchema = new mongoose.Schema({
      time: String,
      title: String,
      text: String,
      tags: Array,
      updatetime: String
})
const articleModel = mongoose.model("article",articleSchema,"article")
module.exports = articleModel