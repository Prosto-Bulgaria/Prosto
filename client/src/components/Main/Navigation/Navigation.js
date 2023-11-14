import React from 'react'
import './Navigation.css'

const Navigation = () => {
    return (
      <header>
        <nav className="navigation">
          <p className="links">
            <a href="/" className="link">
              HOME
            </a>
            <a href="/" className="link">
              PROGRAMMES
            </a>
          </p>
        </nav>
      </header>
    );
}

export default Navigation;