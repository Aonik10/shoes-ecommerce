import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    logged: false,
    data: null,
};

export const sessionSlice = createSlice({
    name: "session",
    initialState,
    reducers: {
        sessionLogin: (state, action) => {
            state.logged = action.payload.logged;
            state.data = action.payload.data;
        },
    },
});

export const { sessionLogin } = sessionSlice.actions;
export default sessionSlice.reducer;
