import { useState } from "react";

const useLocalStorageAuth = (key, initialValue) => {
    const [state, setState] = useState(() => {
        try {
            let item = sessionStorage.getItem(key);
            if (!item) {
                item = localStorage.getItem(key);
            }
            return item ? JSON.parse(item) : initialValue;
        } catch (err) {
            console.log(err);
            return initialValue;
        }
    });

    const setItem = (value) => {
        try {
            value.remember_me
                ? localStorage.setItem(key, JSON.stringify(value))
                : sessionStorage.setItem(key, JSON.stringify(value));

            if (value === initialValue) {
                localStorage.setItem(key, JSON.stringify(value));
                sessionStorage.removeItem(key);
            }

            setState(value);
        } catch (err) {
            console.log(err);
        }
    };

    return [state, setItem];
};

export default useLocalStorageAuth;
