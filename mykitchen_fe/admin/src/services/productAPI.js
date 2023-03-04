import axios from "axios";


const productAPI = {
    getAll: () => {
        return axios.get(`https://be-api-mykitchen.onrender.com/api/product/get-all`);
    },
    getById: (product_id) => {
        return axios.get(`https://be-api-mykitchen.onrender.com/api/product/${product_id}`);
    },
    create: (obj) => {
        return axios.post(`https://be-api-mykitchen.onrender.com/api/product/create`, obj);
    },
    update: (product_id, obj) => {
        return axios.put(`https://be-api-mykitchen.onrender.com/api/product/update/${product_id}`, obj);
    },
    delete: (product_id) => {
        return axios.delete(`https://be-api-mykitchen.onrender.com/api/product/delete/${product_id}`);
    }
}

export default productAPI;