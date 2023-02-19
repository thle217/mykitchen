import axios from "axios";

const baseUrl = "http://localhost:9000/api";

const productAPI = {
    getAll: () => {
        return axios.get(`${baseUrl}/get-all-products`);
    }
}

export default productAPI;