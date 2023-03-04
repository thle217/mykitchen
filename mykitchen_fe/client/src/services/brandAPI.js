import axios from "axios";

const brandAPI = {
    getAll: () => {
        return axios.get(`https://be-api-mykitchen.onrender.com/api/brand/get-all`);
    }
}

export default brandAPI;