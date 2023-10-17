import axios from 'axios';

const RestauranteAPI = axios.create({
    baseURL: 'http://localhost:3000'
})

// CRUD PARA MESAS
// GetMesas --> Obtener todas las mesas
export const getMesas = async () => {
    const Mesas = await RestauranteAPI.get('/Mesas');
    return Mesas.data;
}

//GetMesasXMesero --> Obtener todas las mesas que tiene un mesero
export const getMesasXMesero = async (Id_Mesero) => {
    const MesasXMesero = await RestauranteAPI.get(`/Mesas/?MeseroId=${Id_Mesero}`);
    return MesasXMesero.data;
}

//UpdateMesa --> Para actualizar Mesa por Id
export const UpdateMesa = (newMesa) => RestauranteAPI.put(`/Mesas/${newMesa.id}`,newMesa);

//DeleteMesa --> Para eliminar una Mesa por Id
export const DeleteMesa = (MesaId) => RestauranteAPI.delete(`/Mesas/?MesaId=${MesaId}`);




// CRUD PARA MESEROS
// GetMeseros --> Obtener todos los meseros
export const getMesero = async () => {
    const Meseros = await RestauranteAPI.get('/Meseros');
    return Meseros.data;
}

//GetMeserosId --> Obtener Mesero por Id
export const getMeseroId = async (id) => {
    const Mesero = await RestauranteAPI.get(`/Meseros/${id}`);
    return Mesero.data;
}

//GetMeserosCorreo --> Obtener Mesero por Correo
export const getMeseroCorreo = async (correo) => {
    const Mesero = await RestauranteAPI.get(`/Meseros/?correo=${correo}`);
    return Mesero.data;
} 