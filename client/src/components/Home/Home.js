import React from 'react'
import { Link } from 'react-router-dom'
import HomeButton from './HomeButton/HomeButton';
import './Home.css'

const Home= () => {
    return (
      <div>
        <section className="welcome">
          <h1 className="title">PROSTO</h1>
          <h5 className="title subtitle">Code made simple</h5>
          <ul className="buttons-container">
            <li>
              <Link to="/register">
                <HomeButton text={"Sign up now"}></HomeButton>
              </Link>
            </li>
            <li>
              <Link to="/courses">
                <HomeButton text={"Our courses"}></HomeButton>
              </Link>
            </li>
          </ul>
        </section>
        <section className="">
          
        </section>
      </div>
    );
}

export default Home;