const mongoose = require('mongoose')
const dbURL = 'mongodb+srv://richbaxter:Equipo1!!!@cluster0.byvg0.mongodb.net/available-sites'
mongoose.connect(dbURL, {});
const conexion = mongoose.connection
module.exports = conexion
/*
module.exports = async () => {
    try {
      await mongoose.connect(dbURL, {});
      console.log("CONNECTED TO DATABASE SUCCESSFULLY");
      
    } catch (error) {
      console.log('COULD NOT CONNECT TO DATABASE:', error.message);
    }
};*/
