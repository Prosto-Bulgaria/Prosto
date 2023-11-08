import React from 'react'
import './NavigationComponent.css'

const NavigationComponent = () => {
    return (
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
    );
}

export default NavigationComponent;