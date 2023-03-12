import axios from "axios";

<<<<<<< HEAD
=======
// <<<<<<< HEAD
>>>>>>> 903fd19d022c8681bad8b413cd273dfb3805f4f1
const baseURL = process.env.REACT_APP_API_URL;

const categoryAPI = {
    getAll: () => {
        return axios.get(`${baseURL}/api/category/get-all`);
    },
    delete: (category_id) => {
        return axios.delete(`${baseURL}/api/category/delete/${category_id}`)
    },
    create: (obj) => {
        return axios.post(`${baseURL}/api/category/create`, obj);
    },
    update: (category_id, obj) => {
        return axios.put(`${baseURL}/api/category/update/${category_id}`, obj);
    },
<<<<<<< HEAD
=======
// >>>>>>> cef4c4ffa4ac08d4265b3b8bc62e502353b56565
>>>>>>> 903fd19d022c8681bad8b413cd273dfb3805f4f1
}

export default categoryAPI;