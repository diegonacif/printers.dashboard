import React from "react";
import {
  Container,
  Row,
  Col,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  Table,
} from "react-bootstrap";

import Filters from "../Filters";
import "./style.css";

const DashBody = () => (
  <Container fluid className="px-2 pt-2 pb-3">
    {/* Breadcrumb */}
    <Row className="mb-3">
      <Col className="col-12">
        <Breadcrumb>
          <BreadcrumbItem active>Home</BreadcrumbItem>
          <BreadcrumbItem>Item 2</BreadcrumbItem>
          <BreadcrumbItem>Item 3</BreadcrumbItem>
        </Breadcrumb>
      </Col>
    </Row>
    {/* Top-Cards */}
    <Row className="mb-4">
      <Col className="col-12 col-md-6 col-lg-3 mb-2">
        <Card className="top-card rounded-2 mx-5">
          <Card.Body className="px-3">
            <Card.Title className="text-muted">Clientes</Card.Title>
            <Card.Text className="card-values">$24,000</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col className="col-12 col-md-6 col-lg-3 mb-2">
        <Card className="top-card rounded-2 mx-5">
          <Card.Body className="px-sm-3">
            <Card.Title className="text-muted">Equipamentos</Card.Title>
            <Card.Text className="card-values">$25,000</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col className="col-12 col-md-6 col-lg-3 mb-2">
        <Card className="top-card rounded-2 mx-5">
          <Card.Body className="px-sm-3">
            <Card.Title className="text-muted">TODAYS MONEY 3</Card.Title>
            <Card.Text className="card-values">$26,000</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col className="col-12 col-md-6 col-lg-3">
        <Card className="top-card rounded-2 mx-5">
          <Card.Body className="px-sm-3">
            <Card.Title className="text-muted">TODAYS MONEY 4</Card.Title>
            <Card.Text className="card-values">$27,000</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* Topo da tabela e botão Filtros */}
    <Row>
      <Col>
        <h5 className="pt-2 mb-0">Resultados:</h5>
      </Col>
      <Col className="text-end">
        <Filters />
      </Col>
    </Row>
    {/* Tabela */}
    <Row>
      <Col>
        <Table hover responsive className="w-12 table-light">
          <thead>
            <tr>
              <th className="col-1">#</th>
              <th className="col-3">Cliente</th>
              <th className="col-3">Equipamentos</th>
              <th className="col-1">Tombo</th>
              <th className="col-2">Status</th>
              <th className="col-2">Data</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Total Ink</td>
              <td>Brother DCP-7065DN</td>
              <td>1584</td>
              <td>Estoque</td>
              <td>
                12/07/2021
                <span className="ms-3">
                  <input type="button" value="..." />
                </span>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Trampolim da Vitória</td>
              <td>Brother DCP-L2540DW</td>
              <td>1350</td>
              <td>Em cliente</td>
              <td>
                25/02/2020
                <span className="ms-3">
                  <input type="button" value="..." />
                </span>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Ster Bom</td>
              <td>HP LaserJet P2035n</td>
              <td>357</td>
              <td>Em cliente</td>
              <td>
                15/03/2021
                <span className="ms-3">
                  <input type="button" value="..." />
                </span>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Escola Maria Fernandes</td>
              <td>Samsung SCX-5835NX</td>
              <td>1299</td>
              <td>Manutenção</td>
              <td>
                29/07/2021
                <span className="ms-3">
                  <input type="button" value="..." />
                </span>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Total Ink</td>
              <td>Brother DCP-7065DN</td>
              <td>1584</td>
              <td>Estoque</td>
              <td>
                12/07/2021
                <span className="ms-3">
                  <input type="button" value="..." />
                </span>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Trampolim da Vitória</td>
              <td>Brother DCP-L2540DW</td>
              <td>1350</td>
              <td>Em cliente</td>
              <td>
                25/02/2020
                <span className="ms-3">
                  <input type="button" value="..." />
                </span>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Ster Bom</td>
              <td>HP LaserJet P2035n</td>
              <td>357</td>
              <td>Em cliente</td>
              <td>
                15/03/2021
                <span className="ms-3">
                  <input type="button" value="..." />
                </span>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Escola Maria Fernandes</td>
              <td>Samsung SCX-5835NX</td>
              <td>1299</td>
              <td>Manutenção</td>
              <td>
                29/07/2021
                <span className="ms-3">
                  <input type="button" value="..." />
                </span>
              </td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  </Container>
);

export default DashBody;
