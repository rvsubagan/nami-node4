import mongoose from 'mongoose';
import Ticket from '../model/tickets.js';

export const getTickets = async (req, res) => {
   try {
    const tickets = await Ticket.find();

    res.status(200).json(tickets);
    
   } catch(error) {
    res.status(404).json({ message: error.message });
   }
}

export const getTicket = async (req, res) => {
   const { id } = req.params;

   try {
      const ticket = await Ticket.findById(id);

      res.status(200).json(ticket);
   } catch (error) {
      res.status(404).json({ message: error.message });
   }
}

export const createTicket = async (req, res) => {
   const { title, message } = req.body;

   const ticket = new Ticket({ title, message })

   try {
      await ticket.save();

      res.status(201).json(ticket);
   } catch (error) {
      res.status(409).json({ message: error.message });
   }
}

export const updateTicket = async (req, res) => {
   const { id } = req.params;
   const { title, message } = req.body;

   if(!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No post with id: ${id}`);

   const updatedTicket = { title, message };
   await Ticket.findByIdAndUpdateA(id, updatedTicket, { new: true });
   res.json(updatedTicket);
}

export const deleteTicket = async(req, res) => {
   const { id } = req.params;

   if(!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No post with id: ${id}`);

   await Ticket.findByIdAndRemove(id);

   res.json({ message: 'Ticket deleted successfully!'});
}