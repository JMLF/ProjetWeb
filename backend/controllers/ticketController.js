const ticketService = require('../service/ticketService');
const Ticket = new ticketService.ticketService(); //


const ticketm = require('../models/ticketModel');


exports.TicketController = class TicketController {
  
  async getTicket (req, res) {
    if (req.params != null ) {
      const { id } = req.params;
      const result = await Ticket.getTickets(id);
      res.json(result);
    } else {
      const result = await Ticket.getTickets();
      res.json(result);
    }
    };

  async createTicket (req, res) {
      const {titre, description} = req.body;
      const ModelTicket = new ticketm.ticketModel(titre,description); 
      
      try {
        const result = await Ticket.createTicket(ModelTicket);
      res.json(result);
      } catch (e) {
        res.status(500).json({ message: `Erreur : ${e}` });
      }
    };

    async updateTicket (req, res) {
      const {titre, description, status} = req.body;
      const {id} =  req.params;
      const ModelTicket = new ticketm.ticketModel(titre,description,id,status); 
      
      try {
        const result = await Ticket.update(ModelTicket);

      res.json(result);
      } catch (e) {
        console.error(e);
        res.status(500).json({ message: `Erreur : ${e}` });
      }
    };

  async deleteTicketById (req, res) {
      const { id } = req.params;

      try {
        const result = await Ticket.deleteTicketById(id); 
        res.json(result); 
      } catch (e) {
        res.status(500).json("Erreur : " + e);
      }
    };

};

