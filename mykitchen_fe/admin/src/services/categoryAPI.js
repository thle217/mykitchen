import axios from "axios";

const baseUrl = "http://localhost:9000/api";

const categoryAPI = {
    getAll: () => {
        return axios.get(`${baseUrl}/get-all-categories`);
    }
}

export default categoryAPI;