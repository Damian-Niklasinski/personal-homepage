import { themeButtonSaga } from "./components/features/ThemeButton/themeButtonSaga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
    yield all([
        themeButtonSaga(),
    ])
}