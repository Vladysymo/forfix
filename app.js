//Requires
const express = require('express')
const app     = express()
const http    = require('http').Server(app)
const io      = require('socket.io')(http)
const path    = require('path')
const fs      = require('fs')
const PORT    = process.env.PORT || 3000



//Settings for node.js app
app.use(express.static(path.join(__dirname, 'public')))
// app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'html')


//Requests
app.get('/m', (req, res)=>{
	res.sendFile(path.join(__dirname, 'public/m.html'))
})





//Express listen
http.listen(PORT, () => console.log(`listenning on port: ${ PORT }`))