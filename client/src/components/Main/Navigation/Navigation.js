import React from 'react'
import { Link } from "react-router-dom";
import './Navigation.css'

const Navigation = () => {
    return (
      <header>
        <nav className="navigation">
          <p className="links">
            <Link to="/" className="link">
              Home
            </Link>
            <Link to="/courses" className="link">
              Courses
            </Link>
          </p>
          <p className="links auth">
            <Link to="/login" className="link">
              Sign in
            </Link>
            <Link to="/register" className="link register">
              Sing up
            </Link>
          </p>
        </nav>
      </header>
    );
}

export default Navigation;