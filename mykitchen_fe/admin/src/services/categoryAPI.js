import axios from "axios";


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
}

export default categoryAPI;