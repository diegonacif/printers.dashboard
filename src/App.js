import React from "react";
import { Container, Row, Col } from "../node_modules/react-bootstrap";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/Navbar";
import Menu from "./components/Menu";
import Cards from "./components/Cards";

import "./App.css";

const App = () => (
  <>
    <Container>
      <Row className="mt-1 mb-3">
        <Col className="col-12 px-0">
          <NavBar />
        </Col>
      </Row>
      <Row>
        <Col className="col-3 bg-secondary">
          <Menu />
        </Col>
        <Col className="col-9 bg-info">
          <Cards />
        </Col>
      </Row>
    </Container>
  </>
);

export default App;
