import { Link } from "react-router-dom";
import logoUrl from "../../../assets/ProstoNoBg.png";
import "./Navigation.css";
import { useAuthContext } from "../../../contexts/AuthContext";
import { useRef } from "react";
import LoginModal from "../../Auth/Login/LoginModal";
import RegisterModal from "../../Auth/Register/RegisterModal";

const Navigation = () => {
    const { isAuthenticated } = useAuthContext();

    const dialogRef = useRef();

    const closeDialog = () => {
        dialogRef.current?.close();
    };

    let guestNav = (
        <>
            <LoginModal clickElement={<a className="link">Sign in</a>}></LoginModal>
            <RegisterModal clickElement={<a className="link">Sign up</a>}></RegisterModal>
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
