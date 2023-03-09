import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;

const discountAPI = {
    getAll: () => {
        return axios.get(`${baseURL}/api/discounts/get-all`);
    },
    getById: (discount_id) => {
        return axios.get(`${baseURL}/api/discounts/get-id/${discount_id}`);
    },
    create: (obj) => {
        return axios.post(`${baseURL}/api/discounts/create`, obj);
    },
    update: (discount_id, obj) => {
        return axios.put(`${baseURL}/api/discounts/update/${discount_id}`, obj);
    },
    delete: (discount_id) => {
        return axios.delete(`${baseURL}/api/discounts/delete/${discount_id}`);
    }
}

export default discountAPI;