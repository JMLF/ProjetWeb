const { PrismaClient } = require('@prisma/client');
const { json } = require('express');
const prisma = new PrismaClient()

const userService = require('../service/userService');
const civilityService = require('../service/civilityService');
//ne laisser ici qu'un peu de logique, l'appel du service et un switch avec la reponse 
const User = new userService.UserService(); //
const Civility = new civilityService.CivilityService(); //

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
      const result = await Civility.getCivilities();
      res.json(result);
    };

  async deleteUserById (req, res) {
      const result = await User.deleteUserById(req); 
      res.json(result);    
    };

  async deleteCivilityById (req, res) {
      const result = await Civility.deleteCivilityById(req);
      res.json(result);
    };

  async addCivility (req, res) {
      const result = await Civility.addCivility(req);
      res.json(result);
    };

  async linkUserAndCivility (req, res) {
      const result = await User.linkUserAndCivility(req);
      res.json(result);
    };

};

