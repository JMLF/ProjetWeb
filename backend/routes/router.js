//https://openclassrooms.com/fr/courses/6390246-passez-au-full-stack-avec-node-js-express-et-mongodb/6466459-optimisez-la-structure-du-back-end
const express = require('express')
const userController = require('../service/controller');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

const router = express.Router();

//Add new user   
router.post(`/signup`, userController.signup);

//Get all users
router.get('/users', userController.getUsers);

//Get all civility
  router.get('/civility', userController.getCivilities);

//Delete user by id
router.delete('/user/:id', userController.deleteUserById);

//Delete civility by id
router.delete('/civility/:id', userController.deleteCivilityById);
 
//Ajout d'une civility
router.post('/civility', userController.addCivility);

//Ajout civility à un user by id
router.put('/user/:id/civility', userController.linkUserAndCivility);
  
module.exports = router;

