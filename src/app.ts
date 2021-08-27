import express, { Application, Request, Response } from 'express';
import TicketRoute from './routes/TicketRoute';

const port = 3000;

const app: Application = express();

app.use(express.json());

app.use('/tickets', TicketRoute);

console.log('starting Project, Listening on port', port);

app.listen(port);
