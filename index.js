require('dotenv').config()
const express = require('express')
const { listen } = require('express/lib/application')
const app = express()
const portNumber = process.env.PORT

app.get('/', (req,res)=>{
    res.send('Hello World')
})

app.get('*',(req, res)=>{
    res.send('<h1>404 Page not found</h1>')
})

listen(portNumber, () =>{
    console.log(`Listening to port ${portNumber}`);
})
