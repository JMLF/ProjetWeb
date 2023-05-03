import axios from 'axios';

export async function getTickets() {
    const response = await axios.get('http://localhost:3000/api/tickets');
    return response.data;
}

export async function getTicketsById(id) {
    // Utiliser des backticks (`) pour la concaténation de chaînes
    const response = await axios.get(`http://localhost:3000/api/tickets/${id}`);
    return response.data;
}

export async function updateTicket(id, updatedUser) {
    const response = await axios.post(`http://localhost:3000/api/ticket/${id}`, updatedUser);
    return response.data;
}

export async function deleteTicketById(id) {
    // Utiliser des backticks (`) pour la concaténation de chaînes
    const response = await axios.delete(`http://localhost:3000/api/ticket/${id}`);
    return response.data;
}

export async function createTicket(data) {
    // Utiliser des backticks (`) pour la concaténation de chaînes
    const response = await axios.post(`http://localhost:3000/api/ticket`, data);
    return response.data;
}