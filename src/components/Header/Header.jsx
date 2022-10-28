import React from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import { GiGraduateCap } from "react-icons/gi";
import { useContext } from "react";
// import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { Button, Image, Spinner } from "react-bootstrap";
import { FaUser } from "react-icons/fa";

import { useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";
import ReactTooltip from "react-tooltip";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import { useEffect } from "react";

const Header = () => {
    const [light, setLight] = useState(false);
    const [courses, setCourses] = useState([]);

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {})
            .catch((error) => console.log(error));
    };

    const handleToggle = () => {
        setLight(!light);
    };

    useEffect(() => {
        fetch("https://assignment-server-opal.vercel.app/courses")
            .then((result) => result.json())
            .then((data) => setCourses(data));
    }, []);

    let activeStyle = {
        textDecoration: "underline",
    };

    // let activeClassName = "underline";

    return (
        <Navbar
            className="p-3 light-shadow "
            collapseOnSelect
            expand="lg"
            bg="light"
            variant="light"
        >
            <Container>
                <Navbar.Brand href="#home">
                    <GiGraduateCap
                        className="me-2 pb-1"
                        style={{
                            width: "40px",
                            height: "40px",
                            color: "var(--clr-primary-6)",
                        }}
                    />
                    <span className=" fw-bolder fs-3">
                        <span style={{ color: "var(--clr-primary-6)" }}>
                            Prodigy
                        </span>{" "}
                        Tech
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto nav">
                        <NavLink
                            to="/"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                            to="/courses"
                        >
                            Courses
                        </NavLink>
                        <NavLink
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                            to="/faq"
                        >
                            FAQ
                        </NavLink>
                        <NavLink
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                            to="/blog"
                        >
                            Blog
                        </NavLink>
                        {light ? (
                            <NavLink onClick={handleToggle}>
                                {" "}
                                <MdDarkMode
                                    style={{ height: "30px", width: "30px" }}
                                />
                            </NavLink>
                        ) : (
                            <NavLink onClick={handleToggle}>
                                {" "}
                                <BsFillSunFill
                                    style={{ height: "30px", width: "30px" }}
                                />
                            </NavLink>
                        )}

                        <NavLink>
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
                        </NavLink>

                        {user?.uid ? (
                            <>
                                <button
                                    onClick={handleLogOut}
                                    className="button ms-2 "
                                >
                                    Sign out
                                </button>
                            </>
                        ) : (
                            <>
                                <NavLink to="/login">Log in</NavLink>
                                <NavLink to="/register">Sign up</NavLink>
                            </>
                        )}
                    </Nav>
                    <div className="d-lg-none">
                        {courses.map((course) => (
                            <LeftSideNav course={course} />
                        ))}
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
