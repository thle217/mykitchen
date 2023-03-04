import axios from "axios";

const categoryAPI = {
    getAll: () => {
        return axios.get(`https://be-api-mykitchen.onrender.com/api/category/get-all`);
    }
}

export default categoryAPI;