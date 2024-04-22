import { useState } from "react";

const useLocalStorageThemes = (key, initialValue) => {
    let rootElement = document.documentElement;

    const [state, setState] = useState(() => {
        try {
            let item = localStorage.getItem(key);
            rootElement.style.setProperty(
                "color-scheme",
                `${item ? "dark" : "light"}`
            );
            return item === "true" ? true : false;
        } catch (err) {
            console.log(err);
            return initialValue;
        }
    });

    const setItem = (value) => {
        try {
            setState(value);
            rootElement.style.setProperty(
                "color-scheme",
                `${value ? "dark" : "light"}`
            );
            localStorage.setItem(key, value);
        } catch (err) {
            console.log(err);
        }
    };

    return [state, setItem];
};

export default useLocalStorageThemes;
