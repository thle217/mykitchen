import axios from "axios";

const baseUrl = "http://localhost:9000/api/product";

const productAPI = {
    getAll: () => {
        return axios.get(`${baseUrl}/get-all`);
    },
    getById: (product_id) => {
        return axios.get(`${baseUrl}/${product_id}`);
    }
}

export default productAPI;