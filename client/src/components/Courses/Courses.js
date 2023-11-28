import React from "react";

import CourseCard from "./CourseCard/CourseCard"
import "./Courses.css";

const Courses = () =>{
    return(
        <div className="catalog">
            <CourseCard></CourseCard>
            <CourseCard></CourseCard>
            <CourseCard></CourseCard>
            <CourseCard></CourseCard>
            <CourseCard></CourseCard>
            <CourseCard></CourseCard>
            <CourseCard></CourseCard>
        </div>
    );
}

export default Courses;