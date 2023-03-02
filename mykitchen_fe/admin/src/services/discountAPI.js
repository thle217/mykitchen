import axios from "axios";

const baseUrl = "http://localhost:9000/api/discounts";

const discountAPI = {
    getAll: () => {
        return axios.get(`${baseUrl}/get-all`);
    },
    getById: (discount_id) => {
        return axios.get(`${baseUrl}/get-id/${discount_id}`);
    },
    create: (obj) => {
        return axios.post(`${baseUrl}/create`, obj);
    },
    update: (discount_id, obj) => {
        return axios.put(`${baseUrl}/update/${discount_id}`, obj);
    },
    delete: (discount_id) => {
        return axios.delete(`${baseUrl}/delete/${discount_id}`);
    }
}

export default discountAPI;