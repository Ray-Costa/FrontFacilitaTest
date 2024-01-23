import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 8 * 1000,
});

export const listUsers = async (setUsers) => {
    try {
        const {data} = await api.get('/users');
        setUsers([...data]);
    } catch (error) {
        console.log(error);
    }
};

export const createUser = async (payload) => {
    try {
        await api.post('/users', payload);
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const filterUsers = async (setUsers, search) => {
    try {
        const {data} = await api.get(`/users`, {params: search});
        setUsers([...data]);
    } catch (error) {
        console.log(error);
    }
}
