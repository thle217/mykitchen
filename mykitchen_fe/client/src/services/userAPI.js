import axios from "axios";
const baseURL = process.env.REACT_APP_API_URL;

const userAPI = {
    getAll: () => {
        return axios.get(`${baseURL}/api/user/get-all`);
    },
    getById: (user_id) => {
        return axios.get(`${baseURL}/api/user/get-id/${user_id}`);
    },
    create: (obj) => {
        return axios.post(`${baseURL}/api/user/create-admin`, obj);
    },
    update: (user_id, obj) => {
        return axios.put(`${baseURL}/api/user/update/${user_id}`, obj);
    },
    delete: (user_id) => {
        return axios.delete(`${baseURL}/api/user/delete/${user_id}`);
    },
    login: (obj) => {
        return axios.post(`${baseURL}/api/user/login`, obj);
    },
    register: (obj) => {
        return axios.post(`${baseURL}/api/user/create`, obj);
    },
};

export default userAPI;
