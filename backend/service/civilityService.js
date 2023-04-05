const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()


exports.CivilityService = class CivilityService {

    async getCivilities() {
        const users = await prisma.Civility.findMany({
          include: {
            user: true,
          },
        }
        )
        return users;
      };
        
      async deleteCivilityById(req) {
        const { id } = req.params;

        try {
         const result = await prisma.Civility.delete({
            where: {
              id: Number(id),
            },
          })
          return result;
        } catch (e) {
          return e;
        }
      }

      async addCivility(req) {
        const { status} = req.body;

        try {
        const result = await prisma.Civility.create({
            data: {
              status,
            },
          })
          return result;
        } catch (e) {
          return e;
        }
      }

}