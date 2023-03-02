import axios from "axios";

const brandAPI = {
    getAll: () => {
        return axios.get(`/api/brand/get-all`);
    }
}

export default brandAPI;