const localStorageKey = "darkTheme";

export const ThemeInLocalStorage = (darkTheme) => {
    localStorage.setItem(localStorageKey, JSON.stringify(darkTheme));
};

export const getThemeFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem(localStorageKey));
};