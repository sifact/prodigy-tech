import React from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { GiGraduateCap } from "react-icons/gi";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { Button } from "react-bootstrap";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {})
            .catch((error) => console.log(error));
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

                        {user?.uid ? (
                            <Button onClick={handleLogOut} variant="success">
                                Sign out
                            </Button>
                        ) : (
                            <Link to="/login">Log in</Link>
                        )}

                        <Link to="/register">Sign up</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
