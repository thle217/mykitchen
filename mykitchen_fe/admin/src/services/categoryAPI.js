import axios from "axios";

const baseUrl = "http://localhost:9000/api/category";

const categoryAPI = {
    getAll: () => {
        return axios.get(`${baseUrl}/get-all`);
    }
}

export default categoryAPI;