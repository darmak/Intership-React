import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "http://localhost:5000";

export const fetchUsers = createAsyncThunk(
    'user/fetchAllUsers',
    async() => {
        const response = await axios.get(`${BASE_URL}/user`);
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
        const response = await axios.put(`${BASE_URL}/user/${user.id}`, user);
        return response.data;
    }
);