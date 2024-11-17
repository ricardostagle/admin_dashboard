const express = require('express')
//const path = require('path')
//const expressLayouts = require('express-ejs-layouts')
// Not transpiled with TypeScript or Babel, so use plain Es6/Node.js!
const replace = require('@rollup/plugin-replace');
const mongoose = require('mongoose')
const dbURL = 'mongodb+srv://richbaxter:Equipo1!!!@cluster0.byvg0.mongodb.net/available-sites'

const app = express()
const conexion = require('./db/db')
conexion.once('open', ()=> console.log("CONNECTED TO DATABASE SUCCESSFULLY"))
conexion.once('error', ()=> console.log('COULD NOT CONNECT TO DATABASE:', error.message))

const AdminBro = require('admin-bro')
const AdminExpress = require('@admin-bro/express')
const AdminMongoose = require('@admin-bro/mongoose')

const User = require('./models/User')
const Post = require('./models/Post')
const Site = require('./models/Site')
const Record = require('./models/Record')

AdminBro.registerAdapter(AdminMongoose)
const AdminBroOptions = {resources:[User, Post, Site, Record]}

const adminBro = new AdminBro(AdminBroOptions)
const router = AdminExpress.buildRouter(adminBro)
app.use(adminBro.options.rootPath, router)

/*
app.use(expressLayouts)
app.use(express.static(path.join(__dirname, 'public')))

const router = require('./routes/router')
app.use(router.routes)
*/

app.get('/', (req, res)=>{
	res.send('Dashboard on Node')
})

app.listen(3000, ()=>{
	console.log('Dashboard server up http://localhost:3000/admin')
})
/*
module.exports = async () => {
	try {
	  await mongoose.connect(dbURL, {});
	  console.log("CONNECTED TO DATABASE SUCCESSFULLY");
	} catch (error) {
	  console.error('COULD NOT CONNECT TO DATABASE:', error.message);
	}
	};*/