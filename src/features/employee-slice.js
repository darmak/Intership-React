import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers, deleteUser, updateUser, addUser} from './actionCreator';

const initialState = {
    users: []
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchUsers.fulfilled.type]: (state, action) =>  {
            state.users = action.payload;
        },
        [addUser.fulfilled.type]: (state, action) =>  {
            state.users.push(action.payload);
        },
        [deleteUser.fulfilled.type]: (state, action) =>  {
            state.users = state.users.filter(item => item._id !== action.meta.arg);
        },
        [updateUser.fulfilled.type]: (state, action) =>  {
            state.users.forEach(item => {
                if(item._id === action.payload._id) {
                    item = action.payload;
                }
            });
        }
    }
});

export default userSlice.reducer;