import { useNavigate, Link } from "react-router-dom";

import * as authService from "../../../services/authService";
const Login = () => {
    const navigate = useNavigate();

    const loginHandler = (e) => {
        e.preventDefault();

        let { email, password } = Object.fromEntries(
            new FormData(e.currentTarget)
        );
        authService
            .login(email, password)
            .then((res) => {
                console.log(res);
                navigate("/");
            })
            .catch((err) => {
                // TODO : Show feedback/notification
                console.log(err);
            });
    };

    return (
        <section id="login-page" className="login">
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight dark:text-text_dark text-text">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form
                        className="space-y-6"
                        id="login-form"
                        onSubmit={loginHandler}
                        method="POST"
                    >
                        <div>
                            <div className="flex">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium leading-6 dark:text-text_dark text-text"
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
                                    className="block w-full rounded-md border-0 p-1.5 dark:text-text_dark text-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium leading-6 dark:text-text_dark text-text"
                                >
                                    Password
                                </label>
                                <div className="text-sm">
                                    <Link
                                    //TODO: make forgot pass func
                                        to="#"
                                        className="font-semibold text-accent dark:text-accent_dark dark:hover:text-primary_dark hover:text-primary_dark"
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
                                    placeholder="Enter your password"
                                    className="block w-full rounded-md border-0 p-1.5 dark:text-text_dark text-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <input
                                type="submit"
                                value="Submit"
                                className="flex w-full cursor-pointer justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:text-primary_dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            />
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Don&apos;t have an account? {" "}
                        <Link
                            to="/register"
                            className="font-semibold leading-6 text-accent dark:text-accent_dark dark:hover:text-primary_dark hover:text-primary_dark"
                        >
                            Sign up here
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Login;
