import { Link } from "react-router-dom";
import logoUrl from "../../../assets/ProstoNoBg.png";
import "./Navigation.css";

const Navigation = () => {
    let guestNav = (
        <>
            <Link to="/login" className="link text-text dark:text-text_dark">
                Sign in
            </Link>
            <Link to="/register" className="link register text-text dark:text-text_dark">
                Sign up
            </Link>
        </>
    );

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
                    {guestNav}
                </span>
            </nav>
        </header>
    );
};

export default Navigation;
