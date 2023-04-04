const express = require('express')
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

const app = express()
const port = 3000

app.use(express.json())

app.get('/ping', (req, res) => {
  res.send('Eheh Hello World!')
})

app.listen(port, () => {
  console.log(`🚀 Server ready at: http://localhost:${port} 
  ⭐️ See https://github.com/JMLF/ProjetWeb`)
})
 
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
    const users = await prisma.User.findMany({
      include: {
        civility: true,
      },
    }
    )
    res.json(users)
  })

  //Get all civility
  app.get('/civility', async (req, res) => {
    const users = await prisma.Civility.findMany({
      include: {
        user: true,
      },
    }
    )
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

  //Delete civility by id
  app.delete('/civility/:id', (req, res) => {
    const { id } = req.params;
    
    prisma.Civility.delete({
      where: {
        id: Number(id),
      },
    })
    .then(post => {
      res.json(post);
    })
    .catch(err => {
      res.status(500).json({ error: 'Une erreur s\'est produite lors de la suppression du civility.' });
    });
  });

 
  //Ajout d'une civility
  app.post('/civility', (req, res) => {
    const { status} = req.body;
    
    prisma.Civility.create({
      data: {
        status,
      },
    })
    .then(post => {
      res.json(post);
    })
    .catch(err => {
      res.status(500).json({ error: 'Une erreur s\'est produite lors de lajout de la civilitée.' });
    });
  });

  //Ajout civility à un user by id
  app.put('/user/:id/civility', (req, res) => {
    const { civilityId } = req.body;
    const { id } = req.params;
  
    prisma.user
      .update({
        where: {
        id: Number(id),
        },
        data: {
          civilityId: Number(civilityId)
        },
        include: {
          civility: true,
        },
      })
      .then(updatedUser => {
        res.json(updatedUser);
      })
      .catch(error => {
        res.status(500).json({
          message: 'Oupss something went wrong',
        });
      });
  });
  
 


















