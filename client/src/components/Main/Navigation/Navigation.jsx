import { Link } from "react-router-dom";
import logoUrl from "../../../assets/ProstoNoBg.png";
import "./Navigation.css";
import { useAuthContext } from "../../../contexts/AuthContext";
import { useRef } from "react";
import Login from "../../Auth/Login/Login";

const Navigation = () => {
    const { isAuthenticated } = useAuthContext();

    const dialogRef = useRef();

    const closeDialog = () => {
        dialogRef.current?.close();
    };

    let guestNav = (
        <>
            <dialog
                className="rounded-lg backdrop:bg-black/35 dark:backdrop:bg-black/85"
                ref={dialogRef}
            >
                <Login onSuccess={closeDialog}></Login>
            </dialog>
            <button
                onClick={() => {
                    dialogRef.current?.showModal();
                }}
                className="link"
            >
                Sign in
            </button>
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
