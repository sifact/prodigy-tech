import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import "./Register.css";

const Register = () => {
    const { signUp } = useContext(AuthContext);

    const handleRegistration = (event) => {
        event.preventDefault();
        const form = event.target;
        const fullName = form.fullName.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        signUp(email, password)
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
            <form onSubmit={handleRegistration} className="form__container">
                <h1 className="form__title">Registration Now</h1>

                <div className="form__control">
                    <input
                        name="fullName"
                        type="text"
                        placeholder="full name"
                    />
                </div>
                <div className="form__control">
                    <input
                        name="photoURL"
                        type="text"
                        placeholder="photo url"
                    />
                </div>
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

                <button className="submit-btn" id="btn-submit">
                    Sing up
                </button>
                <small>
                    Already have an account? <Link to="/login">Log in</Link>
                </small>
            </form>
        </section>
    );
};

export default Register;
