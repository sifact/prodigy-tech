import React from "react";
import "./Checkout.css";
import { Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
    const course = useLoaderData();
    const { img, name, rating, instructor, details } = course;

    return (
        <Container className="d-flex justify-content-center align-items-center height">
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
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">{details}</p>
                            <p className="card-text">
                                <small className="text-muted">
                                    {instructor}
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Checkout;
