import CourseCard from "./CourseCard/CourseCard";
import CardSkeleton from "./CardSkeleton/CardSkeleton.jsx";

import "react-loading-skeleton/dist/skeleton.css";
import * as coursesService from "../../services/coursesService.js";
import { useEffect, useState } from "react";

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        window.scrollTo(0,0);
    },[]);

    useEffect(() => {
        coursesService.getAll().then((result) => {
            result;
            setCourses(result);
            setTimeout(() => {
                setIsLoading(false);
            }, 900)
        });
    }, []);

    return (
        <div className="courses container mx-auto max-w-screen-lg pt-6 pb-10 px-3">
            <div>
                <div className="border-b-2 border-primary_dark/20 pb-2 mb-6 text-start">
                    <h1 className="text-3xl font-bold  tracking-tighter">
                        Courses
                    </h1>
                </div>

                <ul className="catalog grid grid-cols-2 gap-x-8 gap-y-6">
                    {isLoading ? (
                        <CardSkeleton cards={6} />
                    ) : (
                        courses.map((x) => (
                            <CourseCard key={x._id} course={x} />
                        ))
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Courses;
