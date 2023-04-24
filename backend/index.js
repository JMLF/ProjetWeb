const express = require('express')
const stuffRoutes = require('./routes/router'); //

const app = express()


app.use(express.json())
app.use('/api', stuffRoutes); //ne pas oublier de rajouter /api/ ...

app.get('/ping', (req, res) => {
  res.send('Eheh Hello World!')
})

module.exports = app

 

  
 


















