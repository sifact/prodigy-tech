import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Course from "../Course/Course";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import { useState } from "react";
import { useEffect } from "react";
import "./Courses.css";

const Courses = () => {
    const courses = useLoaderData();

    return (
        <Container className="my-5">
            <Row>
                <Col lg="3" className="d-none d-lg-block">
                    {courses.map((course) => (
                        <LeftSideNav course={course} />
                    ))}
                </Col>
                <Col lg="9" className="border-2">
                    <Row className="g-3 d-grid courses__wrapper">
                        {courses.map((course) => (
                            <Col>
                                <Course key={course.id} course={course} />
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Courses;
