import React from "react";

import logo_cut from "../../assets/logo.png";
import "./contactos.css";
import Login from "../login/Login";

const contactos = () => {
  return (
    <div className="centered">
      <h1>
        Em construção
        <span className="backoffice">
          <a href="/backoffice/login">©</a>
        </span>
      </h1>
      <center>
        <br></br>
        <br></br>
        <img src={logo_cut} alt="" />
      </center>
    </div>
  );
};

export default contactos;
