import React from "react";
import "./Alert.css";

const Alert = ({ msg, type }) => {
    return <p className={`m-0 alert-custom alert-custom-${type}`}>{msg}</p>;
};

export default Alert;
