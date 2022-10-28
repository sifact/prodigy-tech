import React from "react";
import { Link } from "react-router-dom";
import "./LeftSideNav.css";

const LeftSideNav = ({ course }) => {
    return (
        <div className="left-nav style">
            <Link to={`/course/${course.id}`}>{course.name}</Link>
        </div>
    );
};

export default LeftSideNav;
