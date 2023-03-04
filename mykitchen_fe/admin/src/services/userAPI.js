import axios from "axios";

const userAPI = {
    getAll: () => {
        return axios.get(`https://be-api-mykitchen.onrender.com/api/user/get-all`);
    },
    getById: (user_id) => {
        return axios.get(`https://be-api-mykitchen.onrender.com/api/user/get-id/${user_id}`);
    },
    create: (obj) => {
        return axios.post(`https://be-api-mykitchen.onrender.com/api/user/create-admin`, obj);
    },
    update: (user_id, obj) => {
        return axios.put(`https://be-api-mykitchen.onrender.com/api/user/update/${user_id}`, obj);
    },
    delete: (user_id) => {
        return axios.delete(`https://be-api-mykitchen.onrender.com/api/user/delete/${user_id}`);
    },
};

export default userAPI;
