//tout ce qui est dans le controller devrait etre ici 
// deplacer tout les appel bdd vers le DAO

const { PrismaClient } = require('@prisma/client');
const { empty } = require('@prisma/client/runtime');
const { json } = require('express');
const prisma = new PrismaClient()

const data = require ('../data/userDAO')
const Userbdd = new data.userDAO();

exports.UserService = class UserService {

        async getUsers(id) {
            return await Userbdd.read(id);
        };

        async signup(ModelUser) {

          if (ModelUser.name == null || ModelUser.name == "" ) {throw "Merci de préciser un nom";} 
          if (ModelUser.surname == null || ModelUser.surname == "" ) {throw "Merci de préciser un prénom";}
          
              return await Userbdd.create(ModelUser);
          
        };

        async update(ModelUser) {

          if (ModelUser.name == null || ModelUser.name == "" ) {throw "Merci de préciser un nom";} 
          if (ModelUser.surname == null || ModelUser.surname == "" ) {throw "Merci de préciser un prénom";}
          if (ModelUser.id == null || ModelUser.id == "" ) {throw "Merci de préciser un id utilisateur";} 
          
            
              return await Userbdd.update(ModelUser);
        };

        async deleteUserById(id) {
          if (id == null || id == "" ) {throw "Merci de préciser l'id";}
        
            return await Userbdd.delete(id);
        };

       


}



