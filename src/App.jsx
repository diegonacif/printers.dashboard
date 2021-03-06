import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/Navbar";
// import Filters from "./components/Filters";
import DashBody from "./components/DashBody";

import "./App.css";

const App = () => (
  <Container fluid>
    <Row className="mt-0 mb-0">
      {/* Navbar */}
      <Col className="col-12 px-0 mx-0">
        <NavBar />
      </Col>
    </Row>
    <Row className="background-banner pt-2 mx-0">
      {/* Menu Lateral */}
      {/* <Col className="col-12 col-sm-7 col-md-6 col-lg-3 mx-md-auto mx-sm-auto">
        <Card>
          <Filters />
        </Card>
      </Col> */}
      {/* Corpo do Dashboard */}
      <Col className="col-12 col-lg-9">
        <DashBody />
      </Col>
    </Row>
  </Container>
);

export default App;
