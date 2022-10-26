import React from "react";
import { useContext } from "react";

import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

import "./Login.css";
import { FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((e) => {
                console.log("error: ", e);
            });
    };
    return (
        <section className="login">
            <form onSubmit={handleSignIn} className="form__container">
                <h1 className="form__title">Login</h1>
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
                <button className="submit-btn bg-transparent" id="btn-submit">
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
