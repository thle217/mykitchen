import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;

const productAPI = {
    getAll: () => {
        return axios.get(`${baseURL}/api/product/get-active`);
    },
    getById: (product_id) => {
        return axios.get(`${baseURL}/api/product/${product_id}`);
    },
    getByName: (product_name) => {
        return axios.get(`${baseURL}/api/product/get-by-name/${product_name}`);
    },
    getPopular: () => {
        return axios.get(`${baseURL}/api/get-popular`);
    },
    getLatest: () => {
        return axios.get(`${baseURL}/api/get-latest`);
    },
    getByCategory: (category_id) => {
        return axios.get(`${baseURL}/api/product/get-by-category/${category_id}`);
    },
    getByBrand: (brand_id) => {
        return axios.get(`${baseURL}/api/product/get-by-brand/${brand_id}`);
    }
}

export default productAPI;