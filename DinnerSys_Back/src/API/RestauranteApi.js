import axios from 'axios';

const RestauranteAPI = axios.create({
    baseURL: 'http://localhost:3000'
})

export const getMesas = async () => {
    const Mesas = await RestauranteAPI.get('/Mesas');
    return Mesas.data;
}

export const getMesero = async () => {
    const Meseros = await RestauranteAPI.get('/Meseros') ;
    return Meseros.data;
}