const mongoose = require('moongoose')
const uri = 'mongodb://richbaxter:Equipo1!!!@cluster0.byvg0.mongodb.net/available-sites'
mongoose.connect(uri, {useNewParser:true, useUnifiedTopology:true})
const conexion = mongoose.connection

module.exports = conexion