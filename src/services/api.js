import axios from 'axios';

const api = axios.create({
    baseURL: 'https://felipe-backend.herokuapp.com'
});

export default api;