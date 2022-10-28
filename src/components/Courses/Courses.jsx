import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Course from "../Course/Course";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import { useState } from "react";
import { useEffect } from "react";

const Courses = () => {
    // const courses = useLoaderData();

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch("https://assignment-server-opal.vercel.app/courses")
            .then((result) => result.json())
            .then((data) => setCourses(data));
    }, []);

    return (
        <Container className="my-5">
            <Row>
                <Col lg="3" className="border-1">
                    {courses.map((course) => (
                        <LeftSideNav course={course} />
                    ))}
                </Col>
                <Col lg="9" className="border-2">
                    <Row className="g-3">
                        {courses.map((course) => (
                            <Col className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
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
