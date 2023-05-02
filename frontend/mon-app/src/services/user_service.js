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

export async function updateUser(id, updatedUser) {
    const response = await axios.post(`http://localhost:3000/api/user/${id}`, updatedUser);
    return response.data;
  }

export async function deleteUserById(id) {
    // Utiliser des backticks (`) pour la concaténation de chaînes
    const response = await axios.delete(`http://localhost:3000/api/user/${id}`);
    return response.data;
}

export async function createUser(data) {
    // Utiliser des backticks (`) pour la concaténation de chaînes
    const response = await axios.post(`http://localhost:3000/api/signup`, data);
    return response.data;
}