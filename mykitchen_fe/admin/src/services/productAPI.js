import axios from "axios";

const baseUrl = "http://localhost:9000/api/product";

const productAPI = {
    getAll: () => {
        return axios.get(`${baseUrl}/get-all`);
    }
}

export default productAPI;