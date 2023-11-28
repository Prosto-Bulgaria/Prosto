import React from "react";

import "./CourseCard.css";

const CourseCard = () => {
    return(
        <div className="card">
            <img className="cardImage" src="https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE.jpg" alt="img" />
            <div className="container">
                <h4 className="title">Title</h4>
                <p className="description">Description</p>
            </div>
        </div>
    )
}

export default CourseCard;