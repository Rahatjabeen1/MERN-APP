const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const port = process.env.SERVER_PORT
const app = express()
const path = require('path')

const FrontEndpath = path.join(___dirname,'./FrontEnd/dist')
app.use('/' , express.static(FrontEndpath))

app.use(express.json())
app.use('/api', require('./api/products/Router'))
app.use('/api', require('./api/category/Router'))
app.use('/api', require('./api/brands/Router'))
app.use('/api', require('./api/users/Router'))
app.use('/api', require('./api/orders/Router'))
app.use('/api', require('./api/mailer/Router'))
app.get('*', (req,res) => {
  res.sendFile(path.join(___dirname,'./FrontEnd/dist/index.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})