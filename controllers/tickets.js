import Ticket from '../model/tickets.js';

export const getTickets = async (req, res) => {
   try {
    const tickets = await Ticket.find();

    res.status(200).json(tickets);
    
   } catch(error) {
    res.status(404).json({ message: error.message });
   }

}
