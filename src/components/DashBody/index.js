import React from "react";
import {
  Container,
  Row,
  Col,
  Breadcrumb,
  BreadcrumbItem,
} from "react-bootstrap";
import "./style.css";

const DashBody = () => (
  <Container fluid className="px-0">
    <Row>
      <Col className="col-12">
        <Breadcrumb>
          <BreadcrumbItem active>Home</BreadcrumbItem>
          <BreadcrumbItem>Item 2</BreadcrumbItem>
          <BreadcrumbItem>Item 3</BreadcrumbItem>
        </Breadcrumb>
        <h3>Título da área</h3>
      </Col>
    </Row>
  </Container>
);

export default DashBody;
