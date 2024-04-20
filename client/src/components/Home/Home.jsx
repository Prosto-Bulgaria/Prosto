import { Link } from "react-router-dom";
import Button from "../Main/Buttons/Button/Button";
import "./Home.css";

const Home = () => {
  return (
    <div className="font-bold mt-48 ">
      <section className="welcome ">
        <h1 className="title text-text dark:text-text_dark">PROSTO</h1>
        <h5 className="title subtitle text-text dark:text-text_dark "> 
            <p className=" 
            gradient-effect">Code
            </p> made simple
        </h5>
        <ul className="buttons-container">
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
