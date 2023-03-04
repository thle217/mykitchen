import axios from "axios";

const productAPI = {
    getAll: () => {
        return axios.get(`https://be-api-mykitchen.onrender.com/api/product/get-all`);
    },
    getById: (product_id) => {
        return axios.get(`https://be-api-mykitchen.onrender.com/api/product/${product_id}`);
    },
    getPopular: () => {
        return axios.get(`https://be-api-mykitchen.onrender.com/api/get-popular`);
    },
    getLatest: () => {
        return axios.get(`https://be-api-mykitchen.onrender.com/api/get-latest`);
    },
    getByCategory: (category_id) => {
        return axios.get(`https://be-api-mykitchen.onrender.com/api/product/get-by-category/${category_id}`);
    }
}

export default productAPI;