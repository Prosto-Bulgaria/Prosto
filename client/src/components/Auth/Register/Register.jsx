import { useNavigate, Link } from "react-router-dom";

import * as authService from "../../../services/authService";
import { useAuthContext } from "../../../contexts/AuthContext";
import { isAuth } from "../../../hoc/isAuth";

const Register = () => {
    const navigate = useNavigate();

    const authContext = useAuthContext();

    const registerHandler = (e) => {
        e.preventDefault();

        let { username, email, password } = Object.fromEntries(
            new FormData(e.currentTarget)
        );

        authService
            .register(username, email, password)
            .then((authData) => {
                authContext.login(authData)

                navigate("/");
            })
            .catch((err) => {
                // TODO : Show feedback/notification
                console.log(err);
            });
    };

    return (
        <section id="register-page" className="register">
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight dark:text-text_dark text-text select-none">
                        Create your <p className="gradient-effect">Prosto</p> account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form
                        className="space-y-6"
                        id="register-form"
                        onSubmit={registerHandler}
                        method="POST"
                    >
                        <div>
                            <div className="flex">
                                <label
                                    htmlFor="username"
                                    className="form-label"
                                >
                                    Username
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    required
                                    autoComplete="none"
                                    placeholder="JohnDoe42069"
                                    className="form-input"
                                />
                            </div>
                        </div>

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
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="re-pass"
                                    className="form-label"
                                >
                                    Confirm password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="re-pass"
                                    name="re-pass"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    placeholder="password123"
                                    className="form-input"
                                />
                            </div>
                        </div>

                        <div>
                            <input
                                type="submit"
                                value="Submit"
                                className="form-button"
                            />
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="anchor-link"
                        >
                            Sign in here
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default isAuth(Register);
