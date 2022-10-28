import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Img from "../../assets/course.png";
import "./Home.css";
import { FaUserGraduate, FaDesktop, FaCertificate } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";

const Home = () => {
    return (
        <section className="Home mb-5">
            <div className="polygon py-5">
                <Container className="Home__content d-flex justify-content-around my-5">
                    <div className="d-flex align-items-center">
                        <div className="home__text">
                            <h2 className="pb-2">
                                Start Your Journey to Success
                            </h2>
                            <p className="pb-2">
                                You're guaranteed to find something that's right
                                for you.
                            </p>
                            <Link to="/register">
                                <button className="button">
                                    JOIN FOR FREE
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <img className="home__img" src={Img} alt="" />
                    </div>
                </Container>
            </div>
            <Container>
                <div className="Home__card pt-5">
                    <div>
                        <FaCertificate className="icon" />
                        <h4 className="pt-3">
                            Graduate in as little as 6 months
                        </h4>
                        <p>
                            Online post-graduate certificates are a popular way
                            to develop your professional qualifications of
                            Prodigy Edu
                        </p>
                    </div>
                    <div>
                        <FaDesktop className="icon " />
                        <h4 className="pt-3">Mostly Online Learning</h4>
                        <p>
                            Prodigy Edu certificates can be obtained in a range
                            of specialized areas and typically take about 6
                            months
                        </p>
                    </div>
                    <div>
                        <FaUserGraduate className="icon" />
                        <h4 className="pt-3">Certificate of completion</h4>
                        <p>
                            Our online course certificates can be used around
                            the world and also in most popular companies
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Home;
