import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "http://localhost:5000";

export const fetchUsers = createAsyncThunk(
    'user/fetchAllUsers',
    async() => {
        const response = await axios.get(`${BASE_URL}/user`, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": `JWT ${localStorage.getItem("token")}dawdawd`
            }
        });
        return response.data;
    }
);

export const deleteUser = createAsyncThunk(
    'user/deleteUser',
    async(id) => {
        const response = await axios.delete(`${BASE_URL}/user/${id}`);
        return response.data;
    }
);

export const addUser = createAsyncThunk(
    'user/addUser',
    async(newUser) => {
        const response = await axios.post(`${BASE_URL}/user`, newUser);
        return response.data;
    }
);


export const updateUser = createAsyncThunk(
    'user/updateUser',
    async(user) => {
        const response = await axios.put(`${BASE_URL}/user/${user._id}`, user);
        return response.data;
    }
);

export const createNewUser = createAsyncThunk(
    'user/registrUser',
    async(newUser) => {
        const response = await axios.post(`${BASE_URL}/auth/register`, newUser);
        return response.data;
    }
);

export const authorizationUser = createAsyncThunk(
    'user/authorizationUser',
    async(User) => {
        const response = await axios.post(`${BASE_URL}/auth/sign_in`, User);
        return response.data;
    }
);