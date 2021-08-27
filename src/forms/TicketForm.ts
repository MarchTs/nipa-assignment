import { TicketStatus } from '@prisma/client';

export interface TicketCreateForm {
    title: string;
    description: string;
    contact: string;
}

export interface TicketUpdateForm {
    title: string;
    description: string;
    contact: string;
    status: TicketStatus;
}
