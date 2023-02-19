import axios from "axios";

const baseUrl = "http://localhost:9000/api";

const brandAPI = {
    getAll: () => {
        return axios.get(`${baseUrl}/get-all-brands`);
    }
}

export default brandAPI;