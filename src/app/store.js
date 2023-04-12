import { configureStore } from "@reduxjs/toolkit";
import sessionSlice from "../features/sessionSlice";

export const store = configureStore({
    reducer: {
        session: sessionSlice,
    },
});
