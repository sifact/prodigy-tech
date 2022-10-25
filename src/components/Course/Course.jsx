import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Course = ({ course }) => {
    const { name, img, details, instructor, price, rating } = course;

    return (
        <Card className="lg-shadow" style={{ height: "500px", border: "none" }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{details}</Card.Text>
                <p>{instructor}</p>
                <p>{rating}</p>
                <span>{price}</span>
            </Card.Body>
        </Card>
    );
};

export default Course;
