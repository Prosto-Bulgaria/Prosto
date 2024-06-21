import { Link } from "react-router-dom";
import Button from "../Main/Buttons/Button/Button";

const Home = () => {
    return (
        <div className="font-bold mt-16">
            <section className="welcome relative z-10 px-36 py-44">
                <div className=
                "absolute inset-0 top-0 left-0 w-full transition-all ease-linear duration-200 h-full bg-gradient-radial-dots dark:bg-gradient-radial-dots_dark bg-20 z-[-123] rounded-full shadow-inner-xl dark:shadow-inner-xl_dark">
                    
                </div>

                <div className="mb-14">
                    <h1 className="text-4xl select-none">
                        A
                        <span className="bg-secondary/50 rounded-md inline-block ml-2 mr-2">
                            different
                        </span>
                        and
                        <span className="inline-block mr-2 ml-2">faster</span>
                        <br />
                        way to learn
                        <span className="bg-primary_dark/50 dark:bg-primary_dark/50 inline-block ml-2">
                            coding
                        </span>
                        <span className="animate-blink">_</span>
                    </h1>
                </div>
                <ul className="flex gap-x-2.5 justify-center items-center">
                    <li>
                        <Link to="/register">
                            <Button text={"Start here"} type={"primary"} />
                        </Link>
                    </li>
                    <li>
                        <Link to="/courses">
                            <Button text={"Our courses"} type={"secondary"} />
                        </Link>
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default Home;
