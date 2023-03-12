import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;

const brandAPI = {
    getAll: () => {
        return axios.get(`${baseURL}/api/brand/get-all`);
    },
    getById: (brand_id) => {
        return axios.get(`${baseURL}/api/brand/get-id/${brand_id}`);
    },
    create: (obj) => {
        return axios.post(`${baseURL}/api/brand/create`, obj);
    },
    update: (brand_id, obj) => {
        return axios.put(`${baseURL}/api/brand/update/${brand_id}`, obj);
    },
    delete: (brand_id) => {
        return axios.delete(`${baseURL}/api/brand/delete/${brand_id}`);
    },
}

export default brandAPI;