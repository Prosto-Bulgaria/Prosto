import { Link } from "react-router-dom";

const CourseCard = () => {
    return (
        <div className="group hover:cursor-pointer rounded-xl h-auto w-96 min-w-sm w-md max-w-lg overflow-hidden text-xl bg-white dark:bg-primary_dark/5 shadow-md">
            <div className="content flex flex-col">
                <img
                    className="cardImage object-cover max-h-32"
                    src="https://datapro.in/uploads/89eb94efd5a4418bcbd9db16f8e1977f.png"
                    alt=""
                />
                <div className="wrap text-start p-4 flex flex-col gap-2">
                    <div className="flex justify-between">
                        <header>
                            <h2 className="text-xl text-text font-bold dark:text-text_dark">
                                Your title
                            </h2>
                        </header>
                    </div>
                    <div className="description">
                        <p className="text-sm flex text-text dark:text-text_dark">
                            A course covering JS basics
                        </p>
                    </div>
                    <div className="wrap flex justify-between items-center">
                        <div className="notification">
                            <span className="text-xs text-accent tracking-tighter p-1 bg-accent/20 dark:text-accent_dark dark:bg-accent_dark/20 rounded-md select-none">
                                FREE THIS MONTH
                            </span>
                        </div>
                        <Link className="text-transparent text-sm p-1 group-hover:text-accent dark:group-hover:text-accent_dark rounded-md transition duration-150 ease-in-out">
                            Start now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
