import axios from "axios";

const baseUrl = "http://localhost:9000/api/brand";

const brandAPI = {
    getAll: () => {
        return axios.get(`${baseUrl}/get-all`);
    }
}

export default brandAPI;