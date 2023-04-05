const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

exports.userDAO = class userDAO {

    async create(ModelUser) {
        const result = await prisma.User.create({
            data: {
               name : ModelUser.name,
               surname : ModelUser.surname
            },
          })
        return result;
    }

    async read(param) {
        if(param != null){
            console.log("faire le get by id");
        }
        else {
                const result = await prisma.User.findMany({
                    include: {
                      civility: true,
                    },
                  })
                  return result;
        }
    }

    async delete(id) {
        const result = await prisma.User.delete({
            where: {
            id: Number(id),
            },
          });
          return result
    }

    async update(userId, civilityId) {
        const result = await prisma.user
            .update({
              where: {
              id: Number(userId),
              },
              data: {
                civilityId: Number(civilityId)
              },
              include: {
                civility: true,
              },
            })
            return result;
    }


}