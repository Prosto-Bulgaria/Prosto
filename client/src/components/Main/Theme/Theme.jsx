import {useState} from 'react'
import moonLogo from '../../../assets/moon.png'
import sunLogo from '../../../assets/sun.png'

const Theme = ({children}) => {
    const [darkMode, setDarkMode] = useState(false);

    const changeThemeHandler = () => {
        setDarkMode(!darkMode);
    };

    let moon = (
        <img className="w-5" src={moonLogo} alt="moon" />
    )

    let sun = (
        <img className="w-5 invert" src={sunLogo} alt="sun" />
    )
    return(
        <div className={`${darkMode && "dark"}`}>
            <button className="absolute top-6 right-14 drop-shadow-md bg-gray-300 dark:bg-white/5 rounded-full p-2" onClick={changeThemeHandler}>{darkMode? sun : moon}</button>
            {children}
        </div>
    )
}

export default Theme;