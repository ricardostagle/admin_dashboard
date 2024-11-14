const express = require('express')
//const path = require('path')
//const expressLayouts = require('express-ejs-layouts')

const app = express()
const conexion = require('./db/db')
conexion.once('open', ()=> console.log('conexion successful'))
conexion.once('error', ()=> console.log('conexion with error : '+error))

const AdminBro = require('admin-bro')
const AdminExpress = require('@admin-bro/express')
const AdminMongoose = require('@admin-bro/mongoose')

const User = require('./models/User')
const Post = require('./models/Post')
const Site = require('./models/Site')

AdminBro.registerAdapter(AdminMongoose)
const AdminBroOptions = {resources:[User,Post,Site]}

const adminBro = new AdmminBro(AdminBroOptions)
const router = AdminExpress.buildRouter(adminBro)
app.use(adminBro.options.rootPath, router)

/*
app.set('view engine','ejs')
app.use(expressLayouts)
app.use(express.static(path.join(__dirname, 'public')))

const router = require('./routes/router')
app.use(router.routes)

*/

app.get('/', (req, res)=>{
	res.send('Dashboard')
})

app.listen(3000, ()=>{
	console.log('Dashboard')
})
