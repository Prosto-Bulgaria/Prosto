import React from 'react'
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import './HomeComponent.css'

const HomeComponent = () => {
    return (
      <div>
        <h1 className="title">PROSTO</h1>
        <h5 className="title subtitle">Code made simple</h5>
        <ButtonComponent text={"START NOW"}></ButtonComponent>
      </div>
    );
}

export default HomeComponent;