import React from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { GiGraduateCap } from "react-icons/gi";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { Button, Image } from "react-bootstrap";
import { FaUser } from "react-icons/fa";

import { useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";
import ReactTooltip from "react-tooltip";

const Header = () => {
    const [light, setLight] = useState(false);
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {})
            .catch((error) => console.log(error));
    };

    const handleToggle = () => {
        setLight(!light);
    };
    return (
        <Navbar
            className="p-3"
            collapseOnSelect
            expand="lg"
            bg="dark"
            variant="dark"
        >
            <Container>
                <Navbar.Brand href="#home">
                    <GiGraduateCap
                        className="me-2"
                        style={{ width: "40px", height: "40px" }}
                    />
                    <span className="fw-bolder fs-3">Prodigy Tech</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto nav">
                        <Link to="/">Home</Link>
                        <Link to="/courses">Courses</Link>
                        <Link to="/faq">FAQ</Link>
                        <Link to="/blog">Blog</Link>
                        {light ? (
                            <Link onClick={handleToggle}>
                                {" "}
                                <MdDarkMode
                                    style={{ height: "30px", width: "30px" }}
                                />
                            </Link>
                        ) : (
                            <Link onClick={handleToggle}>
                                {" "}
                                <BsFillSunFill
                                    style={{ height: "30px", width: "30px" }}
                                />
                            </Link>
                        )}

                        <Link>
                            {user?.photoURL ? (
                                <>
                                    <Image
                                        data-tip={user?.displayName}
                                        style={{ height: "30px" }}
                                        roundedCircle
                                        src={user?.photoURL}
                                    />
                                    <ReactTooltip />
                                </>
                            ) : (
                                ""
                            )}
                        </Link>

                        {user?.uid ? (
                            <>
                                <button
                                    onClick={handleLogOut}
                                    className="button ms-2"
                                >
                                    Sign out
                                </button>
                            </>
                        ) : (
                            <>
                                <Link to="/login">Log in</Link>
                                <Link to="/register">Sign up</Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
