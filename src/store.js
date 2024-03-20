import { configureStore } from "@reduxjs/toolkit";
import themeButtonReducer from "./components/features/ThemeButton/themeButtonSlice"
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        themeButton: themeButtonReducer,
    },

    middleware: (getDeafultMiddleware) =>
        getDeafultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga)

export default store;