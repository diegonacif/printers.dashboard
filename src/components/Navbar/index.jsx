import React from "react";
import { Navbar, Nav } from "react-bootstrap";

import "./styles.css";

const NavBar = () => (
  <Navbar className="navbar-background rounded-0">
    <Nav.Item className="fw-bold h4 ps-3 mb-1 pe-3 text-light">
      Printers Stock
    </Nav.Item>
    <Nav.Link
      href="#equipamentos"
      className="text-decoration-none text-light fw-bold"
    >
      Equipamentos
    </Nav.Link>
    <Nav.Link
      href="#cliente"
      className="text-decoration-none text-light fw-bold"
    >
      Clientes
    </Nav.Link>
  </Navbar>
);

export default NavBar;
