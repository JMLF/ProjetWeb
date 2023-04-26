import axios from 'axios';

export default async function getCivility() {
    const response = await axios.get('http://localhost:3000/api/civility');
    return response.data;
}