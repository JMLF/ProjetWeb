import axios from 'axios';

export default async function getUser() {
    const response = await axios.get('http://localhost:3000/api/users');
    return response.data;
}

