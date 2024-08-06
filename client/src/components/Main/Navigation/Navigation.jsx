import { Link } from "react-router-dom";
import logoUrl from "../../../assets/ProstoNoBg.png";
import "./Navigation.css";
import { useAuthContext } from "../../../contexts/AuthContext";
import { useRef } from "react";
import LoginModal from "../../Auth/Login/LoginModal";

const Navigation = () => {
    const { isAuthenticated } = useAuthContext();

    const dialogRef = useRef();

    const closeDialog = () => {
        dialogRef.current?.close();
    };

    let guestNav = (
        <>
            <LoginModal clickElement={<a>Sign in</a>}></LoginModal>
            <Link to="/register" className="link register">
                Sign up
            </Link>
            <Link to="/courses/create" className="link create">
                Create course
            </Link>
        </>
    );

    let userNav = (
        <>
            <Link to="/profile" className="link">
                Profile
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
                    <Link to="/courses" className="link">
                        Courses
                    </Link>
                    {isAuthenticated ? userNav : guestNav}
                </span>
            </nav>
        </header>
    );
};

export default Navigation;
