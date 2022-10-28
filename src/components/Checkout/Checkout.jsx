import React from "react";
import "./Checkout.css";
import { Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

import Course from "../Course/Course";
import Courses from "../Courses/Courses";
import { useState } from "react";
import { useEffect } from "react";

const Checkout = () => {
    const course = useLoaderData();

    const [courses, setCourses] = useState([]);
    const { img, name, rating, instructor, details, price } = course;

    useEffect(() => {
        fetch("https://assignment-server-opal.vercel.app/courses")
            .then((result) => result.json())
            .then((data) => setCourses(data));
    }, []);

    return (
        <>
            <Container className="my-5 d-flex  justify-content-around">
                <div
                    className="card mb-3"
                    style={{ width: "calc(231.33px + 462.66px)" }}
                >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img
                                src={img}
                                className="img-fluid rounded-start"
                                alt="..."
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{name}</h5>
                                <p className="card-text mb-0">
                                    {details.slice(0, 80) + "..."}
                                </p>
                                <p className="card-text mb-0">
                                    <small className="text-muted">
                                        {instructor}
                                    </small>
                                </p>
                                <div className="d-flex align-items-center">
                                    <span className="me-3 pb-1 text-muted">
                                        <FaStar className="text-warning" />
                                        <FaStar className="text-warning" />
                                        <FaStar className="text-warning" />
                                        <FaStar className="text-warning" />

                                        <FaStarHalfAlt className="text-warning" />
                                    </span>
                                    <span>{rating}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="checkout">
                    <h1 className="mb-5">Price: {price}</h1>
                    <button className="button w-100">Checkout</button>
                </div>
            </Container>
            <Container>
                <Row className="g-3">
                    <h3>You may also like:</h3>

                    {courses.map((course) => (
                        <Col className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                            <Course key={course.id} course={course} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default Checkout;
