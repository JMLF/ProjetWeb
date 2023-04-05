//tout ce qui est dans le controller devrait etre ici 
// deplacer tout les appel bdd vers le DAO

const { PrismaClient } = require('@prisma/client');
const { json } = require('express');
const prisma = new PrismaClient()


exports.UserService = class UserService {

        async getUsers() {
            const users = await prisma.User.findMany({
                include: {
                  civility: true,
                },
              })
              return users;
        };

        async signup(req) {
            const {name, surname} = req.body
            const result = await prisma.User.create({
                data: {
                  name,
                  surname,
                },
              })
            return result;
        };

        async deleteUserById(req) {
          const { id } = req.params;
          
          try {            
          const result = await prisma.User.delete({
              where: {
              id: Number(id),
              },
            });
           
            return result

          } catch (e) {
            return e;
          }
        };

        async linkUserAndCivility(req) {
          const { civilityId } = req.body;
          const { id } = req.params;

          try {
           const result = await prisma.user
            .update({
              where: {
              id: Number(id),
              },
              data: {
                civilityId: Number(civilityId)
              },
              include: {
                civility: true,
              },
            })
            return result;
          } catch (e) {
            return e;
          }
        }


}



