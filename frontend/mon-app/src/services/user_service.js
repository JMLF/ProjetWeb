import axios from 'axios';

export async function getUser() {
    const response = await axios.get('http://localhost:3000/api/users');
    return response.data;
}

export async function getUserById(id) {
    // Utiliser des backticks (`) pour la concaténation de chaînes
    const response = await axios.get(`http://localhost:3000/api/users/${id}`);
    return response.data;
}

