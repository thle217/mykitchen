import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;

const brandAPI = {
    getAll: () => {
        return axios.get(`${baseURL}/api/brand/get-all`);
    }
}

export default brandAPI;