import React from "react";
import {
  Container,
  Row,
  Col,
  Breadcrumb,
  BreadcrumbItem,
  Card,
} from "react-bootstrap";
import "./style.css";

const DashBody = () => (
  <Container fluid className="px-2 pt-2 pb-3">
    <Row>
      <Col className="col-12">
        <Breadcrumb>
          <BreadcrumbItem active>Home</BreadcrumbItem>
          <BreadcrumbItem>Item 2</BreadcrumbItem>
          <BreadcrumbItem>Item 3</BreadcrumbItem>
        </Breadcrumb>
      </Col>
    </Row>
    <Row>
      <Col className="col-12">
        <h3>Título da área</h3>
      </Col>
    </Row>
    <Row className="mb-4">
      <Col className="col-sm-12 col-md-6 col-lg-3">
        <Card className="rounded-2">
          <Card.Body className="px-sm-3">
            <Card.Title className="text-muted">TODAYS MONEY 1</Card.Title>
            <Card.Text className="h4">$24,000</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col className="col-sm-12 col-md-6 col-lg-3">
        <Card className="rounded-2">
          <Card.Body className="px-sm-3">
            <Card.Title className="text-muted">TODAYS MONEY 2</Card.Title>
            <Card.Text className="h4">$25,000</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col className="col-sm-12 col-md-6 col-lg-3">
        <Card className="rounded-2">
          <Card.Body className="px-sm-3">
            <Card.Title className="text-muted">TODAYS MONEY 3</Card.Title>
            <Card.Text className="h4">$26,000</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col className="col-sm-12 col-md-6 col-lg-3">
        <Card className="rounded-2">
          <Card.Body className="px-sm-3">
            <Card.Title className="text-muted">TODAYS MONEY 4</Card.Title>
            <Card.Text className="h4">$27,000</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col>
        <Card className="px-2 pt-1">
          <h5>Resultado da busca:</h5>
          <p>
            &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.&quot;
          </p>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default DashBody;
