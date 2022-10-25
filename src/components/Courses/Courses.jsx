import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Course from "../Course/Course";
import LeftSideNav from "../LeftSideNav/LeftSideNav";

const Courses = () => {
    const courses = useLoaderData();

    return (
        <Container className="my-5">
            <Row>
                <Col lg="3" className="border-1">
                    <LeftSideNav />
                </Col>
                <Col lg="9" className="border-2">
                    <Row className="g-4">
                        {courses.map((course) => (
                            <Col className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                <Course course={course} />
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Courses;
