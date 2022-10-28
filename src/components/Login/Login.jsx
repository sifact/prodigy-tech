import React from "react";
import { useContext } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

import "./Login.css";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import Alert from "../Alert/Alert";
import { useState } from "react";

const Login = () => {
    const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
    const { signIn, providerLogin, githubLogin, login } =
        useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then((result) => {
                const user = result.user;

                console.log(user);
                navigate(from, { replace: true });
            })
            .catch((e) => console.log(e.message));
    };

    const handleGithubSignIn = () => {
        githubLogin(githubProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch((e) => console.log(e.message));
    };

    const handleSignIn = (event) => {
        event.preventDefault();
        setAlert({ show: false });
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then((result) => {
                const user = result.user;
                form.reset();
                setAlert({
                    show: true,
                    msg: "successfully logged in",
                    type: "success",
                });
                navigate(from, { replace: true });
                console.log(user);
            })
            .catch((e) => {
                setAlert({ show: true, msg: e.message, type: "danger" });
                console.log(e);
            });
    };
    return (
        <section className="login">
            <div className="form form__container">
                <form onSubmit={handleSignIn} className="">
                    <h1 className="form__title">Login</h1>
                    {alert.show && <Alert {...alert} />}
                    <div className="form__control">
                        <input name="email" type="email" placeholder="email" />
                    </div>
                    <div className="form__control">
                        <input
                            name="password"
                            type="password"
                            placeholder="password"
                        />
                    </div>

                    <button className="submit-btn hv" id="btn-submit">
                        Log in
                    </button>
                </form>
                <small className="d-block text-center">
                    Log in with one of the following:
                </small>
                <button
                    onClick={handleGoogleSignIn}
                    className="submit-btn button"
                    id="btn-submit"
                >
                    <FaGoogle className="me-2" />
                    <span>Google</span>
                </button>
                <button
                    onClick={handleGithubSignIn}
                    className="submit-btn button"
                    id="btn-submit"
                >
                    <FaGithub className="me-2" />
                    <span>Github</span>
                </button>
                <small>
                    New to Prodigy Tech{" "}
                    <Link to="/register">Create a New Account</Link>
                </small>
            </div>
        </section>
    );
};

export default Login;
