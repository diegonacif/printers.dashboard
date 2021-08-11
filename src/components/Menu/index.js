import React from "react";
import { Card } from "../../../node_modules/react-bootstrap";

import "./styles.css";

const Menu = () => (
  <Card>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">
        <p>Primeiro item</p>
      </li>
      <li className="list-group-item">
        <p>Segundo item</p>
      </li>
      <li className="list-group-item">
        <p>Terceiro item</p>
      </li>
      <li className="list-group-item">
        <p>Quarto item</p>
      </li>
      <li className="list-group-item">
        <p>Quinto item</p>
      </li>
      <li className="list-group-item">
        <p>Sexto item</p>
      </li>
    </ul>
  </Card>
);

export default Menu;
