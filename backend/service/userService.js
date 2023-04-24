//tout ce qui est dans le controller devrait etre ici 
// deplacer tout les appel bdd vers le DAO

const { PrismaClient } = require('@prisma/client');
const { empty } = require('@prisma/client/runtime');
const { json } = require('express');
const prisma = new PrismaClient()

const data = require ('../data/userDAO')
const Userbdd = new data.userDAO();

exports.UserService = class UserService {

        async getUsers() {
          try {
            return await Userbdd.read();
          } catch (e) {
            return e;
          }
        };

        async signup(ModelUser) {

          if (ModelUser.name == null || ModelUser.name == "" ) {throw "Merci de préciser un nom";} 
          if (ModelUser.surname == null || ModelUser.surname == "" ) {throw "Merci de préciser un prénom";}
          
            try {
              return await Userbdd.create(ModelUser);
            } catch (e) {
              return e;
            }
        };

        async deleteUserById(id) {
          if (id == null || id == "" ) {throw "Merci de préciser l'id";}
          try {            
            return await Userbdd.delete(id);
          } catch (e) {
            return e;
          }
        };

        async linkUserAndCivility(id, civilityId) {
          if (civilityId == null || civilityId == "" ) {throw "Merci de précier l'id";} 
          try {
           return await Userbdd.update(id,civilityId);
          } catch (e) {
            return e;
          }
        }


}



