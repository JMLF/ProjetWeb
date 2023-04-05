//https://openclassrooms.com/fr/courses/6390246-passez-au-full-stack-avec-node-js-express-et-mongodb/6466459-optimisez-la-structure-du-back-end
const express = require('express')
const Controller = require('../controllers/controller');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

const User = new Controller.UserController(); //

const router = express.Router();

//Add new user   
router.post(`/signup`, User.signupUser);

//Get all users
router.get('/users', User.getUsers);

//Get all civility
  router.get('/civility', User.getCivilities);

//Delete user by id
router.delete('/user/:id', User.deleteUserById);

//Delete civility by id
router.delete('/civility/:id', User.deleteCivilityById);
 
//Ajout d'une civility
router.post('/civility', User.addCivility);

//Ajout civility à un user by id
router.put('/user/:id/civility', User.linkUserAndCivility);
  
module.exports = router;

