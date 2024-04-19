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
      <section id="login-page" className="login">
        <form id="login-form" onSubmit={loginHandler} method="POST">
          <fieldset>
            <legend>Login</legend>
            <p className="field">
                <label htmlFor="email">Email</label>
                <span className="input">
                    <input type="text" name="email" placeholder="johndoe@gmail.com" />
                </span>
            </p>
            <p className="field">
                <label htmlFor="password">Password</label>
                <span className="input">
                    <input type="text" name="password" placeholder="Password" />
                </span>
            </p>
            <input type="submit" className="button submit" value="Login"/>
          </fieldset>
        </form>
      </section>
    );
}

export default Login;