import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;

const categoryAPI = {
    getAll: () => {
        return axios.get(`${baseURL}/api/category/get-all`);
    },
    delete: (category_id) => {
        return axios.delete(`${baseURL}/api/category/delete/${category_id}`)
    },
    create: (obj) => {
        return axios.post(`${baseURL}/api/category/create`, obj);
    },
    update: (category_id, obj) => {
        return axios.put(`${baseURL}/api/category/update/${category_id}`, obj);
    },
}

export default categoryAPI;
