import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    planes: []
}

const planeSlice = createSlice({
    name: 'Planes',
    initialState,
    reducers: {
        savePlane: (state, action) => {
            state.planes.push(action.payload);
        }
    }
});

export const { savePlane } = planeSlice.actions

export default planeSlice.reducer 