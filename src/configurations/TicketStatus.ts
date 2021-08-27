import { TicketStatus } from '@prisma/client';

export function tricketStatusOption(input: string): TicketStatus | undefined {
    switch (input) {
        case TicketStatus.accepted:
            return TicketStatus.accepted;
        case TicketStatus.pending:
            return TicketStatus.pending;
        case TicketStatus.rejected:
            return TicketStatus.rejected;
        case TicketStatus.resolved:
            return TicketStatus.resolved;
    }
}
