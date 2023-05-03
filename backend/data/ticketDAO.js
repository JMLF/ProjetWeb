const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

exports.ticketDAO = class ticketDAO {

    async create(ModelTicket) {
        const result = await prisma.Ticket.create({
            data: {
                titre: ModelTicket.titre,
                description: ModelTicket.description
            },
        })
        return result;
    }

    async update(ModelTicket) {
        const result = await prisma.Ticket.update({
            where: {
                id: Number(ModelTicket.id),
            },
            data: {
                titre: ModelTicket.titre,
                description: ModelTicket.description,
                status: ModelTicket.status
            },
        })
        return result;
    }

    async read(id) {
        if (id != null) {
            const result = await prisma.Ticket.findUnique({
                where: {
                    id: Number(id),
                }
            })
            return result;
        }
        else {
            const result = await prisma.Ticket.findMany()
            return result;
        }
    }

    async delete(id) {
        const result = await prisma.Ticket.delete({
            where: {
                id: Number(id),
            },
        });
        return result
    }



}