const civilityService = require('../service/civilityService');
const Civility = new civilityService.CivilityService(); //

const userm = require('../models/userModel');


exports.CivilityController = class CivilityController {

  async getCivilities (req, res) {
      const result = await Civility.getCivilities();
      res.json(result);
    };

  async deleteCivilityById (req, res) {
      const { id } = req.params;

      try {
        const result = await Civility.deleteCivilityById(id);
        res.json(result);
      } catch (e) {
        res.status(500).json("Erreur" + e);
      }
    };

  async addCivility (req, res) {
      const {status} = req.body;

      const result = await Civility.addCivility(status);
      res.json(result);
    };

};

