import { configureStore } from "@reduxjs/toolkit";
import themeButtonReducer from "./components/features/ThemeButton/themeButtonSlice"

const store = configureStore({
    reducer: {
        themeButton: themeButtonReducer,
    }
});

export default store;