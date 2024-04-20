import { useState } from "react";
import moonLogo from "../../../assets/moon.png";
import sunLogo from "../../../assets/sun.png";
import useLocalStorageThemes from "../../../hooks/useLocalStorageThemes";

const Theme = ({ children }) => {

    const [darkMode, setDarkMode] = useLocalStorageThemes('darkMode', true);

    const changeThemeHandler = () => {
        setDarkMode(!darkMode);
    };

    let moon = <img className="w-5" src={moonLogo} alt="moon" />;

    let sun = <img className="w-5 invert" src={sunLogo} alt="sun" />;
    return (
        <div className={`${darkMode? "dark" : "light"}`}>
            <button
                className="absolute top-[22px] right-14 drop-shadow-md select-none bg-gray-300 dark:bg-white/5 rounded-full p-2"
                onClick={changeThemeHandler}
            >
                {!darkMode ? moon : sun}
            </button>
            {children}
        </div>
    );
};

export default Theme;
