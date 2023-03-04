import axios from "axios";

const discountAPI = {
    getAll: () => {
        return axios.get(`https://be-api-mykitchen.onrender.com/api/discounts/get-all`);
    },
    getById: (discount_id) => {
        return axios.get(`https://be-api-mykitchen.onrender.com/api/discounts/get-id/${discount_id}`);
    },
    create: (obj) => {
        return axios.post(`https://be-api-mykitchen.onrender.com/api/discounts/create`, obj);
    },
    update: (discount_id, obj) => {
        return axios.put(`https://be-api-mykitchen.onrender.com/api/discounts/update/${discount_id}`, obj);
    },
    delete: (discount_id) => {
        return axios.delete(`https://be-api-mykitchen.onrender.com/api/discounts/delete/${discount_id}`);
    }
}

export default discountAPI;