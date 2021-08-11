import React from "react";
import { Container, Row, Col, Card } from "../node_modules/react-bootstrap";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/Navbar";
import Menu from "./components/Menu";
import DashBody from "./components/DashBody";

import "./App.css";

const App = () => (
  <Container className="px-0">
    <Row className="mt-2 mb-2">
      {/* Navbar */}
      <Col className="col-12">
        <NavBar />
      </Col>
    </Row>
    <Row className="background-banner pt-2 mx-0">
      {/* Menu Lateral */}
      <Col className="col-3">
        <Card>
          <Menu />
        </Card>
      </Col>
      {/* Corpo do Dashboard */}
      <Col className="col-9">
        <Card>
          <DashBody />
        </Card>
      </Col>
    </Row>
  </Container>
);

export default App;
