import { Link } from "react-router-dom";

import * as authService from "../../../services/authService";
import { useAuthContext } from "../../../contexts/AuthContext";
import { isAuth } from "../../../hoc/isAuth";
const Login = ({onSuccess}) => {

    const authContext = useAuthContext();

    const loginHandler = (e) => {
        e.preventDefault();

        let { email, password, remember_me } = Object.fromEntries(
            new FormData(e.currentTarget)
        );
        authService
            .login(email, password)
            .then((authData) => {
                authData.remember_me = remember_me
                authContext.login(authData)
                onSuccess? onSuccess() : null;
            })
            .catch((err) => {
                // TODO : Show feedback/notification
                console.log(err);
            });
    };

    return (
        <section id="login-page" className="login">
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-primary_dark/5 rounded-lg border-2 border-primary/5">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight select-none">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
                    <form
                        className="space-y-6 w-80"
                        id="login-form"
                        onSubmit={loginHandler}
                        method="POST"
                    >
                        <div>
                            <div className="flex">
                                <label
                                    htmlFor="email"
                                    className="form-label"
                                >
                                    Email address
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="text"
                                    autoComplete="email"
                                    required
                                    placeholder="johndoe@gmail.com"
                                    className="form-input"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="form-label"
                                >
                                    Password
                                </label>
                                <div className="text-sm">
                                    <Link
                                    //TODO: make forgot pass func
                                        to="#"
                                        className="anchor-link"
                                    >
                                        Forgot password?
                                    </Link>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    placeholder="password123"
                                    className="form-input"
                                />
                            </div>
                            <div className="mt-3 flex gap-2">
                                <input 
                                    id="remember_me"
                                    name="remember_me"
                                    type="checkbox"
                                    className="block"
                                />
                                <label htmlFor="remember_me" className="form-label text-accent dark:text-accent_dark select-none">Remember me</label>
                            </div>
                        </div>
                        <div>
                            <input
                                type="submit"
                                value="Sign in"
                                className="form-button"
                            />
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Don&apos;t have an account? {" "}
                        <Link
                            to="/register"
                            className="anchor-link"
                        >
                            Sign up here
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default isAuth(Login);
