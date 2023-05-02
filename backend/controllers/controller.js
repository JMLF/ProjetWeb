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
    if (req.params != null ) {
      const { id } = req.params;
      const result = await User.getUsers(id);
      res.json(result);
    } else {
      const result = await User.getUsers();
      res.json(result);
    }
    };

  async signupUser (req, res) {
      const {name, surname} = req.body;
      const ModelUser = new userm.userModel(name,surname); 
      //verifier que les deux champs sont présents
      
      try {
        const result = await User.signup(ModelUser);
      res.json(result);
      } catch (e) {
        res.status(500).json({ message: `Erreur : ${e}` });
      }
    };

    async updateUser (req, res) {
      const {name, surname, civilityId} = req.body;
      const {id} =  req.params;
      const ModelUser = new userm.userModel(name,surname, id, civilityId); 
      
      try {
        const result = await User.update(ModelUser);

      res.json(result);
      } catch (e) {
        console.error(e);
        res.status(500).json({ message: `Erreur : ${e}` });
      }
    };

  async deleteUserById (req, res) {
      const { id } = req.params;

      try {
        const result = await User.deleteUserById(id); 
        res.json(result); 
      } catch (e) {
        res.status(500).json("Erreur : " + e);
      }
    };

};

