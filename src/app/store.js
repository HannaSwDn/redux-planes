import { configureStore } from '@reduxjs/toolkit';
import planeReducer from '../features/planeSlice';

export const store = configureStore({
    reducer: {
        planes: planeReducer
    },
});
