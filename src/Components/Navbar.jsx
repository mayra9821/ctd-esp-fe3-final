import React, { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

const NavbarComp = () => {
  const { THEMES, actualTheme, dispatchTheme } = useContext(ContextGlobal);

  const handleToggleTheme = () => {
    if (actualTheme === THEMES.LIGTHSIDE) {
      dispatchTheme({ type: THEMES.DARKSIDE });
    } else {
      dispatchTheme({ type: THEMES.LIGTHSIDE });
    }
  };

  return (
    <Navbar
      bg={`${actualTheme}`}
      variant={`${actualTheme}`}
      className="bs-dark-bg-subtle"
      expand="lg"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            alt=""
            src="/DH.ico"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          DH Hospital
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              {" "}
              Contacto
            </Nav.Link>{" "}
            <Nav.Link as={Link} to="/favs">
              {" "}
              Favoritos
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button
          onClick={handleToggleTheme}
          variant={
            actualTheme === THEMES.LIGTHSIDE
              ? THEMES.DARKSIDE
              : THEMES.LIGTHSIDE
          }
        >
          {actualTheme === THEMES.LIGTHSIDE ? "🌙" : "☀️"}
        </Button>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
