import axios from "axios";

const userAPI = {
    getAll: () => {
        return axios.get(`/api/user/get-all`);
    },
    getById: (user_id) => {
        return axios.get(`/api/user/get-id/${user_id}`);
    },
    create: (obj) => {
        return axios.post(`/api/user/create-admin`, obj);
    },
    update: (user_id, obj) => {
        return axios.put(`/api/user/update/${user_id}`, obj);
    },
    delete: (user_id) => {
        return axios.delete(`/api/user/delete/${user_id}`);
    },
    login: (obj) => {
        return axios.post(`/api/user/login`, obj);
    },
    register:(obj) =>{
        return axios.post(`/api/user/create`, obj);
    }
    
};

export default userAPI;
