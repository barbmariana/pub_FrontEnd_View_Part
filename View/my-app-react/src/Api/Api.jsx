import axios from 'axios';

const Api = axios.create({
    baseURL: "https://jsonserver-senac.onrender.com/"
});

export default Api;