import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;

const productAPI = {
    getAll: () => {
        return axios.get(`${baseURL}/api/product/get-all`);
    },
    getById: (product_id) => {
        return axios.get(`${baseURL}/api/product/${product_id}`);
    },
    getPopular: () => {
        return axios.get(`${baseURL}/api/get-popular`);
    },
    getLatest: () => {
        return axios.get(`${baseURL}/api/get-latest`);
    },
    getByCategory: (category_id) => {
        return axios.get(`${baseURL}/api/product/get-by-category/${category_id}`);
    }
}

export default productAPI;