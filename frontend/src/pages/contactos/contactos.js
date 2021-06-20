import React from "react";

import logo_completo from "../../assets/logo_completo.png";
import "./contactos.css";
import logo from "../../assets/Icon_amarelo.png";
import logo_ipt from "../../assets/logo_ipt.png";

const contactos = () => {
  return (
    <>
    <section id="contactos">
      <div className="centered">
        <center>
          <h1>Contactos</h1>
        </center>
        <div className="row">
          <div className="col-6 cartao">
            <center>
              <img src={logo} alt="" height="200" width="200" />
              <h3>
                Luiza Andaluz Centro Conhecimento
                <span className="backoffice">
                  <a href="/backoffice/login"> ©</a>
                </span>
              </h3>
              <p>www.lacc.pt</p>
              <p>E-mail: geral@lacc.pt</p>{" "}
              <p>Telemóvel/WhatsApp: +351 938 829 003</p>
            </center>
          </div>
          <div className="col-6 cartao">
            <center>
              <img src={logo_ipt} alt="" height="200" width="200" />
              <h3>
                Instituto Politécnico de Tomar
                <span className="backoffice">
                  <a href="/backoffice/login"> ©</a>
                </span>
              </h3>
              <p>Quinta do Contador, Estrada da Serra </p>{" "}
              <p>2300-313 Tomar - Portugal</p>{" "}
              <p>Telefone: +351 249 328 100</p> <p>Fax: +351 249 328 186</p>{" "}
              <p>Email: geral@ipt.pt</p> <p>Gps: 39°36'03.2"N 8°23'29.3"W</p>
            </center>
          </div>
        </div>
      </div>
    </section>
    <div className="creditos">
      <a href="#" onClick={() => eval("QreditRoll.start()")} class="botao">Créditos</a>
    </div>
  </>
  );
};

export default contactos;
