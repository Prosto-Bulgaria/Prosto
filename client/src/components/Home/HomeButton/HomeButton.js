import React from "react";
import './HomeButton.css'

const HomeButton = ({text}) => {
    return(
        <button className="homeButton">{text}</button>
    )
}

export default HomeButton;