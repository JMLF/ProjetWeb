const data = require ('../data/ticketDAO')
const Userbdd = new data.ticketDAO();

exports.ticketService = class ticketService {

        async getTickets(id) {
            return await Userbdd.read(id);
        };

        async createTicket(ModelTicket) {

          if (ModelTicket.titre == null || ModelTicket.titre == "" ) {throw "Merci de préciser le titre du ticket";} 
          if (ModelTicket.titre.lenght > 100 ) {throw "Votre titre ne peux etre supérieur à 100 carractères";}
          
              return await Userbdd.create(ModelTicket);
          
        };

        async update(ModelTicket) {

          if (ModelTicket.titre == null || ModelTicket.titre == "" ) {throw "Merci de préciser un titre";} 
          if (ModelTicket.id == null || ModelTicket.id == "" ) {throw "Merci de préciser un id";} 
          
              return await Userbdd.update(ModelTicket);
        };

        async deleteTicketById(id) {
            if (id == null || id == "") {
              throw "Merci de préciser l'id";
            }
        
            // Récupérer le ticket à partir de l'ID
            const ticket = await Userbdd.read(id);
        
            // Vérifier si le ticket existe
            if (!ticket) {
              throw "Le ticket avec cet ID n'existe pas";
            }
        
            // Vérifier si le statut du ticket est différent de "TERMINE"
            if (ticket.status !== 'TERMINE') {
              return await Userbdd.delete(id);
            } else {
              throw "Impossible de supprimer un ticket avec le statut 'TERMINE'";
            }
          };


}
