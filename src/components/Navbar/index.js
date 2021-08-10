import React from "react";
import { Navbar, Nav } from "../../../node_modules/react-bootstrap";

const NavBar = () => (
  <Navbar className="navbar-dark bg-primary rounded-1">
    <Nav.Item className="fw-bold h4 ps-3 mb-1 pe-3 text-light">
      Printer Stock
    </Nav.Item>
    <Nav.Link href="#equipamentos" className="text-decoration-none text-light">
      Equipamentos
    </Nav.Link>
    <Nav.Link href="#cliente" className="text-decoration-none text-light">
      Clientes
    </Nav.Link>
  </Navbar>
);

export default NavBar;
