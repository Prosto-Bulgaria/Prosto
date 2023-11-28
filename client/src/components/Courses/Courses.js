import React from "react";

import CourseCard from "./CourseCard/CourseCard"
import "./Courses.css";

const Courses = () =>{
    return (
      <div className="courses">
        <ul className="catalog">
          <CourseCard></CourseCard>
          <CourseCard></CourseCard>
          <CourseCard></CourseCard>
          <CourseCard></CourseCard>
          <CourseCard></CourseCard>
          <CourseCard></CourseCard>
          <CourseCard></CourseCard>
        </ul>
      </div>
    );
}

export default Courses;