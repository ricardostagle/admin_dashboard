const mongoose = require('mongoose')
const udbURL = 'mongodb+srv://richbaxter:Equipo1!!!@cluster0.byvg0.mongodb.net/available-sites'

module.exports = async () => {
    try {
      await mongoose.connect(dbURL, {});
      console.log("CONNECTED TO DATABASE SUCCESSFULLY");
    } catch (error) {
      console.log('COULD NOT CONNECT TO DATABASE:', error.message);
    }
};
