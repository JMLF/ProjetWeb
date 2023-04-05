const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

exports.civilityDAO = class civilityDAO {

    async read() {
        const result = await prisma.Civility.findMany({
            include: {
              user: true,
            },
          }
          )
          return result;
    }

    async delete(id) {
        const result = await prisma.Civility.delete({
            where: {
              id: Number(id),
            },
          })
          return result;
    }

    async create(status) {
        const result = await prisma.Civility.create({
            data: {
              status,
            },
          })
          return result;
    }


}