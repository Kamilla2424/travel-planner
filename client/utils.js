import axios from 'axios';
const apiKey = import.meta.env.VITE_GEOAPIFY_API_KEY

const userInfo = axios.create({
    baseURL: 'http://localhost:9090/api',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:5173',
    },
})

const autocompleteApi = axios.create({
    baseURL: 'https://api.geoapify.com/v1/geocode/autocomplete',
})

export const loginUser = async (userData) => {
    try {
        const response = await userInfo.post(`/login`, userData);
        return response.data;
    } catch (err) {
        if (err.response && err.response.data && err.response.data.msg) {
            console.error(err.response.data.msg);
            throw err.response.data.msg;
        } else {
            console.error(err.message);
            throw { msg: err.message };
        }
    }
}

export const autocomplete = async (input) => {
    try {
        const response = await autocompleteApi.get('/', {
            params: {
                apiKey: apiKey,
                text: input,
                type: 'city',
            }
        });
        return response.data.features;
    } catch (err) {
        console.error('geoapify error', err.message);
        throw err
    }
}
