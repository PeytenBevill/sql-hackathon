const express = require('express')
const app = express()
const pool = require('./sql/connections')
const actorRoutes = require('./routes/R-actors')
// const movieRoutes = require('./routes/R-movies')


const PORT = process.env.PORT || 8888

app.listen(PORT, () => {
  console.log('connected to the port')
})

app.use(express.json())
app.use('/actors', actorRoutes)
// app.use('/movies', movieRoutes) 

