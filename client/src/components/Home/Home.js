import React from 'react'
import HomeButton from './HomeButton/HomeButton';
import './Home.css'

const Home= () => {
    return (
      <div>
        <h1 className="title">PROSTO</h1>
        <h5 className="title subtitle">Code made simple</h5>
        <ul className="buttons-container">
          <li><HomeButton text={"ENROLL NOW"}></HomeButton></li>
          <li><HomeButton text={"Learn more"}></HomeButton></li>
        </ul>
      </div>
    );
}

export default Home;