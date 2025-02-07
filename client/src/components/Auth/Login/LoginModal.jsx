/* eslint-disable react/prop-types */
import { useState } from "react";
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
} from "@headlessui/react";
import * as authService from "../../../services/authService";
import { useAuthContext } from "../../../contexts/AuthContext";

const LoginModal = ({ clickElement, isAuth }) => {
    const [modal, setModal] = useState(false);
    const authContext = useAuthContext();

    const clickElementStyles = clickElement?.props.className;
    const clickElementText = clickElement?.props.children;

    const loginHandler = (e) => {
        e.preventDefault();

        let { email, password, remember_me } = Object.fromEntries(
            new FormData(e.currentTarget)
        );
        authService
            .login(email, password)
            .then((authData) => {
                authData.remember_me = remember_me;
                authContext.login(authData);
                setModal(false);
            })
            .catch((err) => {
                // TODO : Show feedback/notification
                console.log(err);
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
                            <section id="login-page" className="login flex items-center justify-center">
                                <div className="flex min-h-full flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8 bg-primary_dark/5 rounded-lg border-2 border-primary/5">
                                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight select-none">
                                            Sign in to your account
                                        </h2>
                                    </div>
                                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm self-center flex flex-col items-center">
                                        <form
                                            className="space-y-6 w-80 "
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
                                                    <label
                                                        htmlFor="remember_me"
                                                        className="form-label text-accent dark:text-accent_dark select-none"
                                                    >
                                                        Remember me
                                                    </label>
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

export default LoginModal;
