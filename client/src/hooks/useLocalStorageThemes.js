import { useState } from "react";

const useLocalStorageThemes = (key, initialValue) => {
    const [state, setState] = useState(() => {
        try{let item = localStorage.getItem(key);

        return item==="true" ? item : initialValue;
        }catch(err){
            return initialValue;
        }
    }); 

    const setItem = (value) => {
        try {
            localStorage.setItem(key, value);
            setState(value);
        } catch (err) {
            console.log(err);
        }
    }

    return [
        state,  
        setItem    
    ];
};

export default useLocalStorageThemes;