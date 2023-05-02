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

    async update(ModelUser) {
      const result = await prisma.user.update({
        where: {
          id: Number(ModelUser.id),
        },
        data: {
          name: ModelUser.name,
          surname: ModelUser.surname,
          civilityId: Number(ModelUser.civilityId)
        },
      })
      return result;
  }

    async read(id) {
        if(id != null){
          const result = await prisma.User.findUnique({
            where: {
              id: Number(id),
              },
            include: {
              civility: true,
            },
          })
          return result;
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



}