import axios from "axios";

<<<<<<< HEAD
const baseURL = process.env.REACT_APP_API_URL;

const categoryAPI = {
    getAll: () => {
        return axios.get(`${baseURL}/api/category/get-all`);
    }
=======

const categoryAPI = {
    getAll: () => {
        return axios.get(`http://localhost:9000/api/category/get-all`);
    },
    delete: (category_id) => {
        return axios.delete(`http://localhost:9000/api/category/delete/${category_id}`)
    },
    create: (obj) => {
        return axios.post(`http://localhost:9000/api/category/create`, obj);
    },
    update: (category_id, obj) => {
        return axios.put(`http://localhost:9000/api/category/update/${category_id}`, obj);
    },
>>>>>>> cef4c4ffa4ac08d4265b3b8bc62e502353b56565
}

export default categoryAPI;