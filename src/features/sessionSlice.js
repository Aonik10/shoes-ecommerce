import { createSlice } from "@reduxjs/toolkit";

let loggedValue = JSON.parse(localStorage.getItem("data"));
console.log(loggedValue);

const initialState = {
    logged: loggedValue?.logged ?? false,
    data: loggedValue?.data,
};

export const sessionSlice = createSlice({
    name: "session",
    initialState,
    reducers: {
        sessionLogin: (state, action) => {
            localStorage.setItem("data", JSON.stringify(action.payload));
            state.logged = action.payload.logged;
            state.data = action.payload.data;
        },
        sessionLogout: (state, action) => {
            localStorage.setItem("data", null);
            state.logged = false;
            state.data = null;
        },
    },
});

export const { sessionLogin, sessionLogout } = sessionSlice.actions;
export default sessionSlice.reducer;
