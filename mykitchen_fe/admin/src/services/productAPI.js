import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;

const productAPI = {
    getAll: () => {
        return axios.get(`${baseURL}/api/product/get-all`);
    },
    getById: (product_id) => {
        return axios.get(`${baseURL}/api/product/${product_id}`);
    },
    getByName: (product_name) => {
        return axios.get(`${baseURL}/api/product/get-by-name/${product_name}`);
    },
    create: (obj) => {
        return axios.post(`${baseURL}/api/product/create`, obj);
    },
    update: (product_id, obj) => {
        return axios.put(`${baseURL}/api/product/update/${product_id}`, obj);
    },
    delete: (product_id) => {
        return axios.delete(`${baseURL}/api/product/delete/${product_id}`);
    }
}

export default productAPI;