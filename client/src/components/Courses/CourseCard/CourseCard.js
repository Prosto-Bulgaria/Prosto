import React from "react";

import "./CourseCard.css";

const CourseCard = () => {
    return(
        <div className="card">
            <img className="cardImage" src="https://innovating.capital/wp-content/uploads/2021/05/placeholder-image-dark.jpg" alt="" />
            <div className="container">
                <p className="title">Title</p>
            </div>
        </div>
    )
}

export default CourseCard;