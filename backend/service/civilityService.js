const data = require ('../data/civilityDAO')
const Civilitybdd = new data.civilityDAO();

exports.CivilityService = class CivilityService {

    async getCivilities() {
      try {
         return await Civilitybdd.read();
      } catch (e) {
        return e;
      }
      };
        
      async deleteCivilityById(id) {
        if (id == null || id == "" ) {throw "Merci de préciser l'id";}
        try {
          return await Civilitybdd.delete(id);
        } catch (e) {
          return e;
        }
      }

      async addCivility(status) {
        try {
          return await Civilitybdd.create(status);
        } catch (e) {
          return e;
        }
      }

}