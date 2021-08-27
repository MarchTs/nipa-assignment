import { Ticket, TicketStatus } from '@prisma/client';
import { v4 as uuid } from 'uuid';
import { TicketCreateForm, TicketUpdateForm } from '../forms/TicketForm';
import TicketService from '../services/TicketService';

class TicketFacade {
    create(form: TicketCreateForm): Promise<Ticket> {
        const entity: Ticket = {
            ...form,
            id: uuid(),
            isDelete: false,
            updated: new Date(),
            created: new Date(),
            status: TicketStatus.pending,
        };
        return TicketService.create(entity);
    }

    update(id: string, form: TicketUpdateForm): Promise<Ticket> {
        const entity: Ticket = {
            id: id,
            ...form,
            updated: new Date(),
            created: new Date(),
            isDelete: false,
        };
        return TicketService.update(id, entity);
    }

    list(status?: TicketStatus): Promise<Ticket[]> {
        return TicketService.list(status);
    }
}

export = new TicketFacade();
