import React from "react";

import logo_completo from "../../assets/logo_completo.png";
import "./contactos.css";
import Login from "../login/Login";
import { Button } from "react-bootstrap";

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
        <img src={logo_completo} alt="" />
      </center>
      <div>
        <Button onClick={() => eval("QreditRoll.start()")}>Créditos</Button>
      </div>
    </div>
  );
};

export default contactos;
