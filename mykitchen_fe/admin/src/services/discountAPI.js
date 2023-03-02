import axios from "axios";

const discountAPI = {
    getAll: () => {
        return axios.get(`/api/discounts/get-all`);
    },
    getById: (discount_id) => {
        return axios.get(`/api/discounts/get-id/${discount_id}`);
    },
    create: (obj) => {
        return axios.post(`/api/discounts/create`, obj);
    },
    update: (discount_id, obj) => {
        return axios.put(`/api/discounts/update/${discount_id}`, obj);
    },
    delete: (discount_id) => {
        return axios.delete(`/api/discounts/delete/${discount_id}`);
    }
}

export default discountAPI;