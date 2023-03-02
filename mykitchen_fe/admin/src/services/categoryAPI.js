import axios from "axios";

const categoryAPI = {
    getAll: () => {
        return axios.get(`/api/category/get-all`);
    }
}

export default categoryAPI;