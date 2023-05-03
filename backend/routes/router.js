const express = require('express')
const ticketController = require('../controllers/ticketController')
const Ticket = new ticketController.TicketController();

const router = express.Router();

router.post(`/ticket`, Ticket.createTicket);

router.post(`/ticket/:id`, Ticket.updateTicket);

router.get('/tickets', Ticket.getTicket);

router.get('/tickets/:id', Ticket.getTicket);

router.delete('/ticket/:id', Ticket.deleteTicketById);
 
module.exports = router;

