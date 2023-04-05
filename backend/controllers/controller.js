const { PrismaClient } = require('@prisma/client');
const { json } = require('express');
const prisma = new PrismaClient()

const userService = require('../service/userService');

//ne laisser ici qu'un peu de logique, l'appel du service et un switch avec la reponse 
const User = new userService.UserService(); //

exports.UserController = class UserController {
  
  async getUsers (req, res) {
      const result = await User.getUsers();
      res.json(result);
    };

  async signupUser (req, res) {
      const result = await User.signup(req);
      res.json(result);
    };

  async getCivilities (req, res) {
      const result = await User.getCivilities();
      res.json(result);
    };

  async deleteUserById (req, res) {
      const result = await User.deleteUserById(req); 
      res.json(result);    
    };

  async deleteCivilityById (req, res) {
      const result = await User.deleteCivilityById(req);
      res.json(result);
    };

  async addCivility (req, res) {
      const result = await User.addCivility(req);
      res.json(result);
    };

  async linkUserAndCivility (req, res) {
      const result = await User.linkUserAndCivility(req);
      res.json(result);
    };

};

