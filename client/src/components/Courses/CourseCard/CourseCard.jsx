/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
const CourseCard = ({course}) => {
    return (
        <Link to={`details/${course._id}`}>
            <div className="group hover:cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out rounded-xl h-72 w-96 min-w-sm w-md max-w-lg overflow-hidden text-xl bg-white dark:bg-primary_dark/5 shadow-md">
                <div className="h-full flex flex-col">
                    <img
                        className="cardImage object-cover h-32 w-full"
                        src={`${course.imageUrl}`}
                        alt=""
                    />
                    <div className="wrap text-start p-4 flex flex-col  gap-2 grow">
                        <div className="flex justify-between">
                            <header>
                                <h2 className="text-xl font-bold">
                                    {course.title}
                                </h2>
                            </header>
                        </div>
                        <div className="description grow">
                            <p className="text-sm flex">
                                {course.description}
                            </p>
                        </div>
                        <div className="wrap flex justify-between items-center mt-auto">
                            <div className="notification">
                                <span className="text-xs text-accent tracking-tighter p-1 bg-accent/20 dark:text-accent_dark dark:bg-accent_dark/20 rounded-md select-none">
                                    FREE THIS MONTH
                                </span>
                            </div>
                            <span
                                className="text-transparent text-sm p-1 group-hover:text-accent dark:group-hover:text-accent_dark rounded-md transition duration-300 ease-in-out"
                            >
                                Start now
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CourseCard;
