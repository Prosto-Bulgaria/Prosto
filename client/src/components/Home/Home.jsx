import { Link } from "react-router-dom";
import Button from "../Main/Buttons/Button/Button";
import { useRef } from "react";

const Home = () => {
    const truthRef = useRef(null);
    const solutionRef = useRef(null);
    const questionRef = useRef(null);
    const coursesRef = useRef(null);
    const topRef = useRef(null);

    return (
        <div className="mt-16" ref={topRef}>
            <section className="welcome relative z-10 px-36 py-44 font-bold">
                <div className="absolute inset-0 top-0 left-0 mx-auto w-1/2 transition-all ease-linear duration-200 h-full bg-gradient-radial-dots dark:bg-gradient-radial-dots_dark bg-20 z-[-123] rounded-full shadow-inner-xl dark:shadow-inner-xl_dark"></div>

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
                        <span className="bg-primary_dark/50 inline-block ml-2">
                            coding
                        </span>
                        <span className="animate-blink">_</span>
                    </h1>
                </div>
                <ul className="flex gap-x-2.5 justify-center items-center">
                    <li>
                        <button
                            onClick={() => {
                                questionRef.current?.scrollIntoView({
                                    behavior: "smooth",
                                });
                            }}
                        >
                            <Button text={"Start here"} type={"primary"} />
                        </button>
                    </li>
                </ul>
            </section>
            <section className="px-36 py-24">
                <button
                    onClick={() => {
                        questionRef.current?.scrollIntoView({
                            behavior: "smooth",
                        });
                    }}
                    className="text-4xl animate-bounce block mx-auto"
                >
                    👇
                </button>
            </section>
            <section
                className="h-screen grid place-content-center"
                ref={questionRef}
            >
                <h2 className="text-4xl mb-8">
                    So, you want to learn how to code like a{" "}
                    <b className="text-5xl text-purple-500">PRO</b>?
                </h2>
                <button
                    onClick={() => {
                        truthRef.current?.scrollIntoView({
                            behavior: "smooth",
                        });
                    }}
                    className="animate-bounce text-lg text-accent dark:text-accent_dark inline-block"
                >
                    yes.. but how can I do that?? 🤔
                </button>
            </section>
            <section
                className="h-screen grid place-content-center"
                ref={truthRef}
            >
                <div className="mb-[200px]">
                    <h2 className="text-3xl mb-8">
                        Every developer has to write{" "}
                        <span className="dark:bg-secondary_dark/50 bg-secondary/50 text-secondary rounded-md px-1 text-4xl font-bold dark:text-secondary_dark">
                            A LOT
                        </span>{" "}
                        of code before he becomes{" "}
                        <b className="dark:text-primary_dark text-blue-400 text-4xl">GREAT</b>
                    </h2>
                    <button
                        onClick={() => {
                            solutionRef.current?.scrollIntoView({
                                behavior: "smooth",
                            });
                        }}
                        className="animate-bounce text-lg text-accent dark:text-accent_dark inline-block"
                    >
                        but that{"\u0027"}s boring... 😭
                    </button>
                </div>
            </section>
            <section
                className="h-screen grid place-content-center"
                ref={solutionRef}
            >
                <div className="mb-[200px]">
                    <h2 className="text-7xl mb-8 font-bold bg-primary_dark/50 dark:bg-blue-400/70 p-4 inline-block">
                        OUR SOLUTION
                    </h2>
                    <h3 className="text-3xl mb-8">
                        We have turned learning into a game. Collect XP and
                        prizes for every little achievement
                    </h3>
                    <button className="text-accent dark:text-accent_dark animate-bounce text-lg">
                        login now to begin your adventure 🧙‍♂️
                    </button>
                </div>
            </section>
            <section
                className="h-screen grid place-content-center"
                ref={coursesRef}
            >
                <div className="mb-[200px]">
                    <h3 className="text-3xl mb-8">
                        Every course starts{" "}
                        <b className="text-4xl dark:text-lime-500 text-lime-600 border-b-2 border-lime-600 dark:border-lime-500">
                            FREE
                        </b>
                        , so don{"\u0027"}t hesitate to have a try
                    </h3>
                    <button className="animate-bounce">
                        <Link
                            to="/courses"
                            onClick={() => {
                                window.scrollTo({ top: 0});
                            }}
                            className="text-accent dark:text-accent_dark text-lg"
                        >
                            you can see here 🧠
                        </Link>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Home;
