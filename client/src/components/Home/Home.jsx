import { Link } from "react-router-dom";
import Button from "../Main/Buttons/Button/Button";

const Home = () => {
  return (
    <div className="font-bold mt-48 ">
      <section className="welcome ">
        <h1 className="text-text dark:text-text_dark text-large select-none">PROSTO</h1>
        <h5 className="text-text dark:text-text_dark text-xl select-none mb-24"> 
            <p className=" 
            gradient-effect">Code
            </p> made simple
        </h5>
        <ul className="flex gap-x-2.5 justify-center items-center">
          <li>
            <Link to="/register">
              <Button text={"Sign up now"} type={"primary"}></Button>
            </Link>
          </li>
          <li>
            <Link to="/courses">
              <Button text={"Our courses"} type={"secondary"}></Button>
            </Link>
          </li>
        </ul>
      </section>
      <section className=""></section>
    </div>
  );
};

export default Home;
