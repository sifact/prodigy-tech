import React from "react";
import "./Course.css";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
    const { name, img, details, instructor, price, rating, id } = course;

    return (
        <Card
            className="light-shadow hover"
            style={{
                height: "450px",
                // width: "300px",
                border: "none",
            }}
        >
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title className="fw-bolder fs-5">{name}</Card.Title>
                <Card.Text className="mb-1 style">
                    {`${details.slice(0, 50)}... `}{" "}
                    <Link to={`/course/${course.id}`}>See more</Link>
                </Card.Text>
                <p
                    className="mb-0 text-dim"
                    style={{ color: "var(--ternary)" }}
                >
                    {instructor}
                </p>
                <div className="d-flex align-items-center">
                    <span className="me-3 pb-1">
                        <FaStar className="text-warning" />
                        <FaStar className="text-warning" />
                        <FaStar className="text-warning" />
                        <FaStar className="text-warning" />

                        <FaStarHalfAlt className="text-warning" />
                    </span>
                    <span>{rating}</span>
                </div>
                <span className="fw-bolder fs-5">{price}</span>
            </Card.Body>
        </Card>
    );
};

export default Course;
