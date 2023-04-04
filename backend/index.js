const express = require('express')
const stuffRoutes = require('./routes/router'); //

const app = express()
const port = 3000

app.use(express.json())
app.use('/api', stuffRoutes); //ne pas oublier de rajouter /api/ ...

app.get('/ping', (req, res) => {
  res.send('Eheh Hello World!')
})

app.listen(port, () => {
  console.log(`🚀 Server ready at: http://localhost:${port} 
  ⭐️ See https://github.com/JMLF/ProjetWeb`)
})
 

  
 


















