const express = require('express')
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get("/url", (req, res, next) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
   });

 
 //Add new user   
app.post(`/signup`, async (req, res) => {
    const {name, surname} = req.body
  
    const result = await prisma.User.create({
      data: {
        name,
        surname,
      },
    })
    res.json(result)
  })

  //Get all users
  app.get('/users', async (req, res) => {
    const users = await prisma.User.findMany()
    res.json(users)
  })

  //Delete user by id
  app.delete('/user/:id', (req, res) => {
    const { id } = req.params;
    
    prisma.User.delete({
      where: {
        id: Number(id),
      },
    })
    .then(post => {
      res.json(post);
    })
    .catch(err => {
      res.status(500).json({ error: 'Une erreur s\'est produite lors de la suppression de l\'utilisateur.' });
    });
  });