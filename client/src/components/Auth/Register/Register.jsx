import {useNavigate} from 'react-router-dom'

import * as authService from '../../../services/authService'

const Register = () => {
    const navigate = useNavigate();

    const registerHandler = (e) => {
        e.preventDefault();

        let {username, email, password} = Object.fromEntries(new FormData(e.currentTarget));

        authService.register(username,email,password)
            .then(authData => {
                console.log(authData);
                navigate('/')
            })
            .catch(err => {
                // TODO : Show feedback/notification
                console.log(err);
            });
    }

    return (
      <section id="register-page" className="register">
        <form id="register-form" onSubmit={registerHandler} method="POST">
          <fieldset>
            <legend className="text-text dark:text-text_dark">Register</legend>
            <p className="field">
                <label className="text-text dark:text-text_dark" htmlFor="username">Username</label>
                <span className="input">
                    <input type="text" name="username" placeholder="JohnDoe420" />
                </span>
            </p>
            <p className="field">
                <label className="text-text dark:text-text_dark" htmlFor="email">Email</label>
                <span className="input">
                    <input type="text" name="email" placeholder="johndoe@gmail.com" />
                </span>
            </p>
            <p className="field">
                <label className="text-text dark:text-text_dark" htmlFor="password">Password</label>
                <span className="input">
                    <input type="text" name="password" placeholder="Password" />
                </span>
            </p>
            <p className="field">
                <label className="text-text dark:text-text_dark" htmlFor="repeat-pass">Confirm password</label>
                <span className="input">
                    <input type="text" name="repeat-pass" placeholder="Repeat your password" />
                </span>
            </p>
            <input type="submit" className="button submit cursor-pointer text-text dark:text-text_dark" value="Register"/>
          </fieldset>
        </form>
      </section>
    );
}

export default Register;