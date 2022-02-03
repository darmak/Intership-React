import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/employee-slice';

export const store = configureStore({
    reducer: {
        user: userReducer,
    }
})