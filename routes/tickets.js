import express from 'express';
import { getTickets } from '../controllers/tickets.js';

const router = express.Router();

router.get('/', getTickets);

export default router;