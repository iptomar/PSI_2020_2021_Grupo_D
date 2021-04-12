import React from "react";
import { Link } from "react-router-dom";

//import css
import "./error.css";

const Error = () => {
  return (
    <div className="centered">
      <h1>404 Error Page</h1>
      <Link to="/" className="btn">
        Clique aqui para voltar
      </Link>
    </div>
  );
};

export default Error;
