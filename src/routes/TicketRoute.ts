import { TicketStatus } from '@prisma/client';
import express, { Request, Response } from 'express';
import { tricketStatusOption } from '../configurations/TicketStatus';
import TicketFacade from '../facades/TicketFacade';
const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
    res.json(await TicketFacade.create(req.body));
});

router.put('/:id', async (req: Request, res: Response) => {
    res.json(await TicketFacade.update(req.params.id, req.body));
});

router.get('/', async (req: Request, res: Response) => {
    const raw_status = req.query.status?.toString();

    const status: TicketStatus | undefined = raw_status
        ? tricketStatusOption(raw_status)
        : undefined;
    res.json(await TicketFacade.list(status));
});

router.get('/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await TicketFacade.find(id);
    if (result) res.json(result);
    else res.status(404).json({ message: `id ${id} not found` });
});

export = router;
