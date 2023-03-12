import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;

const cartAPI = {
    create: (user_id) => {
        return axios.post(`${baseURL}/api/cart/create/${user_id}`);
    },
    getAll: (user_id) => {
        return axios.get(`${baseURL}/api/cart/get-products/${user_id}`);
    },
    add: (obj) => {
        return axios.post(`${baseURL}/api/cart/add`, obj);
    },
    increase: (obj) => {
        return axios.put(`${baseURL}/api/cart/increase`, obj);
    },
    decrease: (obj) => {
        return axios.put(`${baseURL}/api/cart/decrease`, obj);
    },
    delete: (obj) => {
        return axios.delete(`${baseURL}/api/cart/delete`, {data: obj}); //HTTP DELETE VỚI BODY
    },
}

export default cartAPI;