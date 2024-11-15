const express = require('express')
//const path = require('path')
//const expressLayouts = require('express-ejs-layouts')
// Not transpiled with TypeScript or Babel, so use plain Es6/Node.js!
const replace = require('@rollup/plugin-replace');

const app = express()
const conexion = require('./db/db')

const AdminBro = require('admin-bro')
const AdminExpress = require('@admin-bro/express')
const AdminMongoose = require('@admin-bro/mongoose')

const User = require('./models/User')
const Post = require('./models/Post')

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
