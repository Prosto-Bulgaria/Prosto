import React from 'react'
import HomeButton from './HomeButton/HomeButton';
import './Home.css'

const Home= () => {
    return (
      <div>
        <h1 className="title">PROSTO</h1>
        <h5 className="title subtitle">Code made simple</h5>
        <HomeButton text={"ENROLL NOW"}></HomeButton>
      </div>
    );
}

export default Home;