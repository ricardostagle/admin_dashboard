const mongoose = require('mongoose')

const RecordSchema = new mongoose.Schema({
    name:{type:String, required:true},
    ip:{type:String, required:true},
    status:{type:String, required:true},
    date:{type:String, required:true}
})

module.exports = mongoose.model('Record', RecordSchema)