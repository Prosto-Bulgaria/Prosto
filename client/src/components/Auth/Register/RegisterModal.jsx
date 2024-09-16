import { useNavigate, Link } from "react-router-dom";

import * as authService from "../../../services/authService";
import { useAuthContext } from "../../../contexts/AuthContext";
import { isAuth } from "../../../hoc/isAuth";
import { useState } from "react";

import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
} from "@headlessui/react";

const RegisterModal = ({ clickElement, isAuth }) => {
    const [modal, setModal] = useState(false);
    const navigate = useNavigate();

    const clickElementStyles = clickElement?.props.className;
    const clickElementText = clickElement?.props.children;

    const authContext = useAuthContext();

    const registerHandler = (e) => {
        e.preventDefault();

        let { username, email, password } = Object.fromEntries(
            new FormData(e.currentTarget)
        );

        authService
            .register(username, email, password)
            .then((authData) => {
                authContext.login(authData);

                navigate("/");
            })
            .catch((err) => {
                // TODO : Show feedback/notification
                err;
            });
    };

    return (
        <section>
            <button
                className={`${clickElementStyles}`}
                onClick={() => {
                    if (!isAuth) {
                        setModal(true);
                    }
                }}
            >
                {clickElementText}
            </button>
            <Dialog open={modal} onClose={setModal} className="relative z-10">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-black/50 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
                />

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                        <DialogPanel
                            transition
                            className="relative transform overflow-hidden rounded-lg bg-background dark:bg-background_dark text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                        >
                            <section id="register-page" className="register">
                                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-primary_dark/5 rounded-lg border-2 border-primary/5">
                                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight select-none">
                                            Create your{" "}
                                            <p className="gradient-effect">
                                                Prosto
                                            </p>{" "}
                                            account
                                        </h2>
                                    </div>

                                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm items-center flex flex-col ">
                                        <form
                                            className="space-y-6 w-80"
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
                                                    value="Sign up"
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
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </section>
    );
};

export default isAuth(RegisterModal);
