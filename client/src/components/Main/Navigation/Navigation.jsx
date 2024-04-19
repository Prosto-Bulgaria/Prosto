import { Link } from "react-router-dom";
import logoUrl from '../../../assets/ProstoNoBg.png'
import './Navigation.css'

const Navigation = () => {

    let guestNav = (
        <span className="links auth">
            <Link to="/login" className="link">
              Sign in
            </Link>
            <Link to="/register" className="link register">
              Sign up
            </Link>
          </span>
    )

    return (
      <header>
        <nav className="navigation">
          <span className="links">
            <Link to="/" className="logo">
              <img className='icon'
                src={logoUrl}
                alt="icon"
              />
            </Link>
            <Link to="/courses" className="link">
              Courses
            </Link>
          </span>
          {guestNav}
        </nav>
      </header>
    );
}

export default Navigation;