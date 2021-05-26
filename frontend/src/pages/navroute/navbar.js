import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../configs/authContext";

//import bootstrap
import { Navbar, Nav, NavLink } from "react-bootstrap";
//import global do logo
import logo_cut_branco from "../../assets/logo_cut_branco.png";
//CSS
import "./navbar.css";

const Navegbar = () => {
  const auth = useContext(AuthContext);
  return (
    <Navbar
      bg="dark"
      variant="dark"
      className="py-3"
      style={{ fontSize: "20px" }}
    >
      <Navbar.Brand style={{ fontSize: "20px" }} href="/">
        <span className="logoespaco">
          <img
            alt=""
            src={logo_cut_branco}
            width="30"
            height="30"
            className="d-inline-block align-top circulo-branco"
          />
        </span>{" "}
        Fundação Luiza Andaluz Centro de Conhecimento
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/" className="navText">
              Home
            </Link>
          </Nav.Link>
          {/* <NavDropdown title="A fundação" id="basic-nav-dropdown">
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
          </NavDropdown> */}
          <Nav.Link>
            <Link to="/mapa" className="navText">
              Mapa
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
          {auth.user ? (
            <Nav.Link
              as={NavLink}
              to="/"
              onClick={() => auth.logout()}
              style={{
                color: "white",
                border: "1px solid",
                borderRadius: "6px",
                backgroundColor: "#2F8AD7",
              }}
            >
              Logout
            </Nav.Link>
          ) : (
            <Nav.Link>
              <Link to="/contactos" className="navText">
                Contactos
              </Link>
            </Nav.Link>
          )}
          <div id="google_translate_element"></div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navegbar;
