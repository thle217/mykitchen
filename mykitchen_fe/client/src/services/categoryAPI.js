import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;

const categoryAPI = {
    getAll: () => {
        return axios.get(`${baseURL}/api/category/get-all`);
    }
    
}

export default categoryAPI;