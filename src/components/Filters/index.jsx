import React from "react";
import { Form, Image } from "react-bootstrap";
// import Select from "react-select";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import image from "../../img/total-ink-logo.png";
import "./styles.css";

// const status = [
//   { value: "estoque", label: "Estoque" },
//   { value: "cliente", label: "Em cliente" },
//   { value: "manutencao", label: "Manutenção" },
//   { value: "descartada", label: "Descartada" },
// ];

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "93%",
    },
  },

  label: {
    backgroundColor: "white",
    top: "-3px",
    paddingInline: "4px",
  },
}));

const Filters = () => {
  const classes = useStyles();

  return (
    <>
      <Image src={image} className="w-25 mx-auto pt-3 pb-3" />

      <Form className={classes.root} noValidate autoComplete="off">
        <TextField
          InputLabelProps={{
            classes: {
              root: classes.label,
            },
          }}
          id="outlined-basic"
          label="Cliente"
          variant="outlined"
          size="small"
          notched="true"
        />
        <TextField
          InputLabelProps={{
            classes: {
              root: classes.label,
            },
          }}
          id="outlined-basic"
          label="Equipamentos"
          variant="outlined"
          size="small"
        />
        <TextField
          InputLabelProps={{
            classes: {
              root: classes.label,
            },
          }}
          id="outlined-basic"
          label="Status"
          variant="outlined"
          size="small"
        />
        <TextField
          InputLabelProps={{
            classes: {
              root: classes.label,
              shrink: true,
            },
          }}
          id="outlined-basic"
          label="Data Inicial"
          variant="outlined"
          size="small"
          type="text"
          defaultValue=""
        />
        <TextField
          InputLabelProps={{
            classes: {
              root: classes.label,
            },
          }}
          id="outlined-basic"
          label="Data Final"
          variant="outlined"
          size="small"
        />
      </Form>
    </>
  );
};

export default Filters;
