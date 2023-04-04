const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

//Ici on ne devrait avoir que de la logique métier, deplacer les call bdd dans le DataAccessObject 

exports.signup = async (req, res) => {
    const {name, surname} = req.body
  
    const result = await prisma.User.create({
      data: {
        name,
        surname,
      },
    })
    res.json(result)
  };

  exports.getUsers = async (req, res) => {
    const users = await prisma.User.findMany({
      include: {
        civility: true,
      },
    }
    )
    res.json(users)
  };

  exports.getCivilities = async (req, res) => {
    const users = await prisma.Civility.findMany({
      include: {
        user: true,
      },
    }
    )
    res.json(users)
  };

  exports.deleteUserById = async (req, res) => {
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
  };

  exports.deleteCivilityById = async (req, res) => {
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
  };

  exports.addCivility = async (req, res) => {
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
  };

  exports.linkUserAndCivility = async (req, res) => {
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
  };