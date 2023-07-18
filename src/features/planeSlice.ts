import { Store, createSlice } from "@reduxjs/toolkit";

const initialState = {
    planes: [
        {
            name: 'Airbus A380'
        },
        {
            name: 'Boeing 737-MAX'
        },
        {
            name: 'Boeing 747'
        }
    ]
};

const planeSlice = createSlice({
    name: 'Planes',
    initialState,
    reducers: {
        savePlane: (state, action) => {
            state.planes.push(action.payload);
        }
    }
});

export const { savePlane } = planeSlice.actions;

// Remove any from this line
export const selectPlaneList = (state: any) => state.planes.planes;

export default planeSlice.reducer;