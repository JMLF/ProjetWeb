const userService = require('../service/userService');
const civilityService = require('../service/civilityService');
const User = new userService.UserService(); //
const Civility = new civilityService.CivilityService(); //

const userm = require('../models/userModel');

//Verifier qu'on a bien le nombre de param attendu mais pas plus 
// Faire un model lorsque c'est possible
//Attention à la typo classe vs var 

exports.UserController = class UserController {
  
  async getUsers (req, res) {
      const result = await User.getUsers();
      res.json(result);
    };

  async signupUser (req, res) {
      const {name, surname} = req.body;
      const ModelUser = new userm.userModel(name,surname); 

      //verifier que les deux champs sont présents
      const result = await User.signup(ModelUser);
      res.json(result);
    };

  async getCivilities (req, res) {
      const result = await Civility.getCivilities();
      res.json(result);
    };

  async deleteUserById (req, res) {
      const { id } = req.params;

      const result = await User.deleteUserById(id); 
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
      const { civilityId } = req.body;
      const { id } = req.params;

      const result = await User.linkUserAndCivility(id, civilityId);
      res.json(result);
    };

};

