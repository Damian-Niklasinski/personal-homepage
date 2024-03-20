import { call, select, takeEvery } from "redux-saga/effects"
import { selectTheme, toggleTheme } from "./themeButtonSlice"
import { ThemeInLocalStorage } from "./themeButtonLocalStorage";

function* ThemeInLocalStorageHandler() {
    const theme = yield select(selectTheme);
    yield call(ThemeInLocalStorage, theme)
};

export function* themeButtonSaga() {
    yield takeEvery(toggleTheme.type, ThemeInLocalStorageHandler);
};