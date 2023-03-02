import axios from "axios";

const productAPI = {
    getAll: () => {
        return axios.get(`/api/product/get-all`);
    },
    getById: (product_id) => {
        return axios.get(`/api/product/${product_id}`);
    },
    create: (obj) => {
        return axios.post(`/api/product/create`, obj);
    },
    update: (product_id, obj) => {
        return axios.put(`/api/product/update/${product_id}`, obj);
    },
    delete: (product_id) => {
        return axios.delete(`/api/product/delete/${product_id}`);
    }
}

export default productAPI;