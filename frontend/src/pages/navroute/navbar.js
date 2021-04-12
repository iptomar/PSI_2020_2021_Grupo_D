import React from "react";
import { Link } from "react-router-dom";

//import bootstrap
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
//import global do logo
import logo_cut from "../../assets/logo_cut.png";
//CSS
import "./navbar.css";

const Navegbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">
        <span className="circulo-branco">
          <img
            alt=""
            src={logo_cut}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
        </span>{" "}
        Fundação Luiza Andaluz
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/" className="navText">
              Home
            </Link>
          </Nav.Link>
          <NavDropdown title="A fundação" id="basic-nav-dropdown">
            <NavDropdown.Item href="#section1">A intituição</NavDropdown.Item>
            <NavDropdown.Item href="#section2">Visão</NavDropdown.Item>
            <NavDropdown.Item href="#section3">Valores</NavDropdown.Item>
            <NavDropdown.Item href="#section4">Missão</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#section5">Organograma</NavDropdown.Item>
            <NavDropdown.Item href="#section6">
              Plano atividades
            </NavDropdown.Item>
            <NavDropdown.Item href="#section7">Galeria</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link>
            <Link to="/querajudar" className="navText">
              Quer Ajudar?
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/presidente" className="navText">
              Presidente
            </Link>
          </Nav.Link>
        </Nav>
        {/* talvez adicionar um icone de um telefone ou voltar a por a esquerda porque a direita ta muito a parte */}
        <Nav className="justify-content-end">
          <Nav.Link>
            <Link to="/contactos" className="navText">
              Contactos
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navegbar;
