import React from 'react'
import { Link } from "react-router-dom";
import './Navigation.css'

const Navigation = () => {
    return (
      <header>
        <nav className="navigation">
          <span className="links">
            <Link to="/" className="logo">
              <img className='icon'
                src={require("../../../assets/ProstoNewLogo.png")}
                alt="icon"
              />
              <p className='logoText'>Prosto</p>
            </Link>
            <Link to="/courses" className="link">
              Courses
            </Link>
          </span>
          <span className="links auth">
            <Link to="/login" className="link">
              Sign in
            </Link>
            <Link to="/register" className="link register">
              Sign up
            </Link>
          </span>
        </nav>
      </header>
    );
}

export default Navigation;