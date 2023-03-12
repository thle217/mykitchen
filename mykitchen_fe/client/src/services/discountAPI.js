import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;

const discountAPI = {
    getAll: () => {
        return axios.get(`${baseURL}/api/discounts/get-all`);
    }
}

export default discountAPI;