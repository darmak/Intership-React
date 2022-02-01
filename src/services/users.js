import axios from 'axios';
const BASE_URL = "http://localhost:5000";

export const getAllUsers = () => {
    return axios.get(`${BASE_URL}/user`)
        .then(res => res.data)
}

export const deleteUser = (id) => {
    return axios.delete(`${BASE_URL}/user/${id}`)
}

export const addUser = (newUser) => {
    return axios.post(`${BASE_URL}/user`, newUser)
}

export const updateUser = (e, id) => {
    return  axios.put(`${BASE_URL}/user/${id}`, { salary: `${e.target.value}` });
}