import { TicketStatus } from '@prisma/client';
import express, { Request, Response } from 'express';
import { tricketStatusOption } from '../configurations/TicketStatus';
import TicketFacade from '../facades/TicketFacade';
const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
    res.json(await TicketFacade.create(req.body));
});

router.post('/:id', async (req: Request, res: Response) => {
    res.json(await TicketFacade.update(req.params.id, req.body));
});

router.get('/', async (req: Request, res: Response) => {
    const raw_status = req.query.status?.toString();

    const status: TicketStatus | undefined = raw_status
        ? tricketStatusOption(raw_status)
        : undefined;
    res.json(await TicketFacade.list(status));
});

export = router;
