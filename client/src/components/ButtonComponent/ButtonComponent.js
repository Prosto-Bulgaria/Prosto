import React from "react";
import './ButtonComponent.css'

const ButtonComponent = ({text}) => {
    return(
        <button class="homeButton">{text}</button>
    )
}

export default ButtonComponent;