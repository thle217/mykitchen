import axios from "axios";

const baseUrl = "http://localhost:9000/api/user";

const userAPI = {
    getAll: () => {
        return axios.get(`${baseUrl}/get-all`);
    },
    getById: (user_id) => {
        return axios.get(`${baseUrl}/get-id/${user_id}`);
    },
    create: (obj) => {
        return axios.post(`${baseUrl}/create-admin`, obj);
    },
    update: (user_id, obj) => {
        return axios.put(`${baseUrl}/update/${user_id}`, obj);
    },
    delete: (user_id) => {
        return axios.delete(`${baseUrl}/delete/${user_id}`);
    },
};

export default userAPI;
