import axios from 'axios';

const Api = axios.create({
    baseURL: "https://pubresiliajson.onrender.com/"
});

export default Api;