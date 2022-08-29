// DEPENDENCIES
const express = require('express')
const mongoose = require('mongoose')
const cors= require('cors')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
  )

 //middlewear
 app.use(express.json())
 app.use(cors())
// ROUTES
app.get('/', (req, res) => {
    res.send('Hello World')
  })

//books
const booksController= require('./controllers/books_controller.js')
app.use('/books',booksController)

 

  // LISTEN
  app.listen(3001, () => {
    console.log('nomming at port', 3001);
  })