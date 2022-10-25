import React from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { GiGraduateCap } from "react-icons/gi";

const Header = () => {
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
                        <Link to="">profile</Link>
                        <Link to="/logout">Log out</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
