import React from "react";
import { useLoaderData } from "react-router-dom";
import "./CourseDetails.css";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Container } from "react-bootstrap";

const CourseDetails = () => {
    const course = useLoaderData();

    const { name, img, instructor, overview, details, rating, price } = course;

    return (
        <section className="course__details">
            <Container>
                <div className="course__content">
                    <h1>{name}</h1>
                    <p>{details}</p>
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
                    <p>Created by {instructor}</p>
                </div>

                <h2>Course overview</h2>
            </Container>
        </section>
    );
};

export default CourseDetails;
