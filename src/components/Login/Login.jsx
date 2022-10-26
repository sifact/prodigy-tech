import React from "react";
import { useContext } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

import "./Login.css";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { GoogleAuthProvider } from "firebase/auth";
import Alert from "../Alert/Alert";
import { useState } from "react";

const Login = () => {
    const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
    const { signIn, providerLogin } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then((result) => {
                const user = result.user;

                console.log(user);
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
            });
    };
    return (
        <section className="login">
            <form onSubmit={handleSignIn} className="form__container">
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
                <small className="d-block text-center">
                    Log in with one of the following:
                </small>
                <button
                    onClick={handleGoogleSignIn}
                    className="submit-btn bg-transparent"
                    id="btn-submit"
                >
                    <FaGoogle className="me-2" />
                    <span>Google</span>
                </button>
                <button className="submit-btn bg-transparent" id="btn-submit">
                    <FaGithub className="me-2" />
                    <span>Github</span>
                </button>
                <small>
                    New to Prodigy Tech{" "}
                    <Link to="/register">Create a New Account</Link>
                </small>
            </form>
        </section>
    );
};

export default Login;
