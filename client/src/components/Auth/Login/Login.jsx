import {useNavigate} from 'react-router-dom'

import * as authService from '../../../services/authService'
const Login = () => {
    const navigate = useNavigate();

    const loginHandler = (e) => {
        e.preventDefault();

        let {email, password} = Object.fromEntries(new FormData(e.currentTarget));
        authService.login(email,password).then(res => {
            console.log(res);
            navigate('/')
        })
        .catch(err => {
            // TODO : Show feedback/notification
            console.log(err);
        });
    }

    return (
      <section id="login-page" className="login ">
        <form id="login-form" onSubmit={loginHandler} method="POST">
          <fieldset>
            <legend className="text-text dark:text-text_dark">Login</legend>
            <p className="field">
                <label className="text-text dark:text-text_dark" htmlFor="email">Email</label>
                <span className="input">
                    <input type="text" name="email" placeholder="johndoe@gmail.com" />
                </span>
            </p>
            <p className="field">
                <label className=" text-text dark:text-text_dark" htmlFor="password">Password</label>
                <span className="input">
                    <input type="text" name="password" placeholder="Password" />
                </span>
            </p>
            <input type="submit" className="button submit text-text dark:text-text_dark" value="Login"/>
          </fieldset>
        </form>
      </section>
    );
}

export default Login;