const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    title:{type:String, required},
    content:{type:String, required}
})

module.exports = mongoose.model('Post', PostSchema)