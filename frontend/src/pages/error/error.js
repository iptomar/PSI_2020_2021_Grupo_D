import React from "react";
import { Link } from "react-router-dom";
import Logo_completo from "../../assets/logo_completo.png";

//import css
import "./error.css";

const Error = ({ code, msg }) => {
  return (
    <div className="centeredErro">
      <img src={Logo_completo} alt="" />
      <h1>
        {code} {msg}
      </h1>
      <Link to="/" className="btn">
        Clique <span style={{ color: "#FFB81D" }}>aqui</span> para voltar
      </Link>
    </div>
  );
};

export default Error;
