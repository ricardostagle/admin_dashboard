const mongoose = require('mongoose')

const SiteSchema = new mongoose.Schema({
    name:{type:String, required},
    ip:{type:String, required},
    status:{type:String, required},
    date:{type:String, required}
})

module.exports = mongoose.model('Site', SiteSchema)