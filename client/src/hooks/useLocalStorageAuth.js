import {useState} from 'react'

const useLocalStorageAuth = (key, initialValue) => {
    const [state, setState] = useState(() => {
        try {
            let item = localStorage.getItem(key);

            return item? JSON.parse(item) : initialValue;
        } catch (err) {
            console.log(err);
            return initialValue;
        }
    });

    const setItem = (value) => {
        try {
            value.remember_me? localStorage.setItem(key, JSON.stringify(value)) : null;
            value === initialValue? localStorage.setItem(key, JSON.stringify(value)) : null;

            setState(value);
        } catch (err) {
            console.log(err);
        }
    }

    return[
        state,
        setItem
    ]
}

export default useLocalStorageAuth;