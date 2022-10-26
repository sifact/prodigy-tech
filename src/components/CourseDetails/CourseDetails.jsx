import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./CourseDetails.css";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Card, Container } from "react-bootstrap";
import OverView from "../OverView/OverView";
import Button from "react-bootstrap/Button";

const CourseDetails = () => {
    const course = useLoaderData();

    const { name, img, instructor, overview, details, rating, price, id } =
        course;

    return (
        <section className="course__details">
            <div className="top py-3">
                <Container>
                    <div className="course__content">
                        <h1 className="w-50">{name}</h1>
                        <p className="w-50">{details}</p>
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
                        <p style={{ color: "var(--ternary)" }}>
                            Created by {instructor}
                        </p>
                    </div>
                </Container>
            </div>
            <Container className="pt-5">
                <h2 className="pb-3">Course overview</h2>
                {overview.map((view, idx) => (
                    <OverView key={idx} view={view} />
                ))}
            </Container>

            <div className="card__absolute">
                <Card
                    className="light-shadow hover card"
                    style={{
                        height: "450px",
                        width: "300px",
                        border: "none",
                    }}
                >
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className="fw-bolder fs-5">
                            {name}
                        </Card.Title>

                        <span className="fw-bolder fs-3">{price}</span>

                        <Link to={`/checkout/${id}`}>
                            <Button
                                className=" w-100 my-3 button"
                                variant="outline-info"
                            >
                                Checkout
                            </Button>
                        </Link>

                        <small className="d-block">
                            30-Day Money-Back Guarantee
                        </small>
                        <small>Full Lifetime Access</small>
                    </Card.Body>
                </Card>
            </div>
        </section>
    );
};

export default CourseDetails;
