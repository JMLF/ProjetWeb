import axios from 'axios';

export default async function getCivility() {
    const response = await axios.get('http://localhost:3000/api/civility');
    return response.data;
}

export async function deleteCivilityById(id) {
    const response = await axios.delete(`http://localhost:3000/api/civility/${id}`);
    return response.data;
}

export async function createCivility(data) {
    // Utiliser des backticks (`) pour la concaténation de chaînes
    const response = await axios.post(`http://localhost:3000/api/civility`, data);
    return response.data;
}
