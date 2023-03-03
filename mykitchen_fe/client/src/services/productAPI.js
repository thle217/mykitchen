import axios from "axios";

const productAPI = {
    getAll: () => {
        return axios.get(`/api/product/get-all`);
    },
    getById: (product_id) => {
        return axios.get(`/api/product/${product_id}`);
    },
    getPopular: () => {
        return axios.get(`/api/get-popular`);
    },
    getLatest: () => {
        return axios.get(`/api/get-latest`);
    },
    getByCategory: (category_id) => {
        return axios.get(`/api/product/get-by-category/${category_id}`);
    }
}

export default productAPI;