require('dotenv').config()
const express = require('express')
const { listen } = require('express/lib/application')
const app = express()
const portNumber = process.env.PORT

app.get('/', (req,res)=>{
    res.send('Hello World')
})

listen(portNumber, () =>{
    console.log(`Listening to port ${portNumber}`);
})
