import React, { useState } from "react";
import { Form, Image, Button, Modal } from "react-bootstrap";

import image from "../../img/total-ink-logo.png";
import "./styles.css";

const Filters = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="success" className="mx-auto mb-3" onClick={handleShow}>
        Filtros
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Image src={image} className="w-25 mx-auto mt-3 mb-4" />

        <Form className="col-11 mx-auto pb-4">
          {/* Form Cliente */}
          <Form.Group className="mb-3" controlId="formFiltroCliente">
            <Form.Label className="mb-0">Cliente</Form.Label>
            <Form.Control type="text" placeholder="Digite um cliente" />
          </Form.Group>

          {/* Form Equipamentos */}
          <Form.Group className="mb-3" controlId="formFiltroEquipamentos">
            <Form.Label className="mb-0">Equipamentos</Form.Label>
            <Form.Control type="text" placeholder="Digite um equipamento" />
          </Form.Group>

          {/* Form Status */}
          <Form.Label className="mb-0">Status</Form.Label>
          <select className="form-control mb-3" id="formFiltroStatus">
            <option hidden>Selecione um status</option>
            <option value="1">Estoque</option>
            <option value="2">Cliente</option>
            <option value="3">Manutenção</option>
            <option value="4">Descartado</option>
          </select>

          {/* Form Data Inicial */}
          <Form.Group className="mb-3" controlId="formFiltroDataInicial">
            <Form.Label className="mb-0">Data Inicial</Form.Label>
            <Form.Control type="date" />
          </Form.Group>

          {/* Form Data Final */}
          <Form.Group className="mb-3" controlId="formFiltroDataFinal">
            <Form.Label className="mb-0">Data Final</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
        </Form>
      </Modal>
    </>
  );
};

export default Filters;
