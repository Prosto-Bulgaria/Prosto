import {useNavigate, Link} from 'react-router-dom'

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
    //   <section id="register-page" className="register">
    //     <form id="register-form" onSubmit={registerHandler} method="POST">
    //       <fieldset>
    //         <legend className="text-text dark:text-text_dark">Register</legend>
    //         <p className="field">
    //             <label className="text-text dark:text-text_dark" htmlFor="username">Username</label>
    //             <span className="input">
    //                 <input type="text" name="username" placeholder="JohnDoe420" />
    //             </span>
    //         </p>
    //         <p className="field">
    //             <label className="text-text dark:text-text_dark" htmlFor="email">Email</label>
    //             <span className="input">
    //                 <input type="text" name="email" placeholder="johndoe@gmail.com" />
    //             </span>
    //         </p>
    //         <p className="field">
    //             <label className="text-text dark:text-text_dark" htmlFor="password">Password</label>
    //             <span className="input">
    //                 <input type="text" name="password" placeholder="Password" />
    //             </span>
    //         </p>
    //         <p className="field">
    //             <label className="text-text dark:text-text_dark" htmlFor="repeat-pass">Confirm password</label>
    //             <span className="input">
    //                 <input type="text" name="repeat-pass" placeholder="Repeat your password" />
    //             </span>
    //         </p>
    //         <input type="submit" className="button submit cursor-pointer text-text dark:text-text_dark" value="Register"/>
    //       </fieldset>
    //     </form>
    //   </section>
    <section id="login-page" className="login">
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight dark:text-text_dark text-text">
                        Create your <p className="bg-gradient-to-r from-primary_dark to-accent_dark
            inline-block text-transparent bg-clip-text">Prosto</p> account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form
                        className="space-y-6"
                        id="login-form"
                        onSubmit={registerHandler}
                        method="POST"
                    >
                        <div>
                            <div className="flex">
                                <label
                                    htmlFor="username"
                                    className="block text-sm font-medium leading-6 dark:text-text_dark text-text"
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
                                    autoComplete='none'
                                    placeholder="Enter your username"
                                    className="block w-full rounded-md border-0 p-1.5 dark:text-text_dark dark:bg-white/5 text-text shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-0 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

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
                                    className="block w-full rounded-md border-0 p-1.5 dark:text-text_dark dark:bg-white/5 text-text shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-0 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
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
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    placeholder="Enter your password"
                                    className="block w-full rounded-md border-0 p-1.5 dark:text-text_dark dark:bg-white/5 text-text shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-0 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="re-pass"
                                    className="block text-sm font-medium leading-6 dark:text-text_dark text-text"
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
                                    placeholder="Enter your password"
                                    className="block w-full rounded-md border-0 p-1.5 dark:text-text_dark dark:bg-white/5 text-text shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-0 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <input
                                type="submit"
                                value="Submit"
                                className="flex w-full cursor-pointer justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:text-primary_dark dark:hover:text-primary dark:hover:bg-primary_dark"
                            />
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Already have an account? {" "}
                        <Link
                            to="/login"
                            className="font-semibold leading-6 text-accent dark:text-accent_dark dark:hover:text-primary_dark hover:text-primary_dark"
                        >
                            Sign in here
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Register;