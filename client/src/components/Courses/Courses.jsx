import CourseCard from "./CourseCard/CourseCard"
import "./Courses.css";

const Courses = () =>{
    return (
      <div className="courses">
        <ul className="catalog grid grid-cols-2 gap-10">
          <CourseCard></CourseCard>
          <CourseCard></CourseCard>
          <CourseCard></CourseCard>
          <CourseCard></CourseCard>
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