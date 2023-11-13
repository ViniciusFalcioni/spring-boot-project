import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

const api = axios.create({
    baseURL: API_URL,
});

export const adicionarRemedio = async (remedio) => {
    try {
        const response = await api.post('/remedios', remedio);
        return response.data;
    } catch (error) {
        // Tratar o erro
        console.error('Erro ao adicionar remédio:', error.response);
        throw error;
    }
};

export const listarRemedios = async () => {
    try {
        const response = await api.get('/remedios');
        return response.data;
    } catch (error) {
        console.error('Erro ao listar remédios:', error.response);
        throw error;
    }
};

export const deletarRemedio = async (remedioId) => {
    try {
        const response = await api.delete(`/remedios/${remedioId}`);
        return response.data;
    } catch (error) {
        console.error('Erro ao deletar remédio:', error.response);
        throw error;
    }
};


export const editarRemedio = async (remedioId, changes) => {
    try {
        const response = await api.put(`/remedios/${remedioId}`, changes);
        return response.data;
    } catch (error) {
        console.error('Erro ao editar remédio:', error.response);
        throw error;
    }
};