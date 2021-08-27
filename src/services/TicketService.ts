import { PrismaClient, Ticket, TicketStatus } from '@prisma/client';

const prisma = new PrismaClient();

class TicketService {
    create(entity: Ticket): Promise<Ticket> {
        return prisma.ticket.create({ data: entity });
    }

    update(id: string, entity: Ticket): Promise<Ticket> {
        let { created, ...modifing } = entity;
        return prisma.ticket.update({ data: modifing, where: { id: id } });
    }

    list(status?: TicketStatus): Promise<Ticket[]> {
        return prisma.ticket.findMany({
            where: { status: status },
            orderBy: [{ status: 'desc' }, { updated: 'desc' }],
        });
    }
}

export = new TicketService();
