import axios from "axios";

const baseUrl = "http://localhost:9000/api/product";

const productAPI = {
    getAll: () => {
        return axios.get(`${baseUrl}/get-all`);
    },
    getById: (product_id) => {
        return axios.get(`${baseUrl}/${product_id}`);
    },
    create: (obj) => {
        return axios.post(`${baseUrl}/create`, obj);
    },
    update: (product_id, obj) => {
        return axios.put(`${baseUrl}/update/${product_id}`, obj);
    },
    delete: (product_id) => {
        return axios.delete(`${baseUrl}/delete/${product_id}`);
    }
}

export default productAPI;