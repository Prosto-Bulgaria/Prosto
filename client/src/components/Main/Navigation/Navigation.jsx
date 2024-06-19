import { Link } from "react-router-dom";
import logoUrl from "../../../assets/ProstoNoBg.png";
import "./Navigation.css";
import { useAuthContext } from "../../../contexts/AuthContext";

const Navigation = () => {

    const {user} = useAuthContext()
    
    let guestNav = (
        <>
            <Link to="/login" className="link text-text dark:text-text_dark">
                Sign in
            </Link>
            <Link to="/register" className="link register text-text dark:text-text_dark">
                Sign up
            </Link>
            <Link to="/courses/create" className="link create text-text dark:text-text_dark">
                Create course
            </Link>
        </>
    );

    let userNav = (
        <>
            <Link to="/profile" className="link text-text dark:text-text_dark">Profile</Link>
        </>
    ) 

    return (
        <header>
            <nav className="navigation">
                <span className="links">
                    <Link to="/" className="logo">
                        <img className="icon" src={logoUrl} alt="icon" />
                    </Link>
                </span>
                <span className="links">
                    <Link to="/courses" className="link text-text dark:text-text_dark">
                        Courses
                    </Link>
                    {user.email? userNav : guestNav}
                </span>
            </nav>
        </header>
    );
};

export default Navigation;
