require('dotenv').config()
const express = require('express')
const app = express()
const portNumber = process.env.PORT
const methodOverride = require('method-override')

// Middleware
//Starting express react views engine
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(methodOverride('_method'))

// Body parser
app.use(express.urlencoded({ extended: true }))



//routes
// controllers
app.use('/places', require('./controllers/places'))

// homepage
app.get('/', (req,res)=>{
    res.render('home')
})

//route for all pages not handled by our routes.
app.get('*',(req, res)=>{
    res.status(404).render('error404')
})

//Starts Server on port
app.listen(portNumber, () =>{
    console.log(`Listening to port ${portNumber}`);
})
