import React from "react";
import ReactDOM from "react-dom";
// Uso de bootstrap para responsive, color de botones y formulario de datos.
import "bootstrap/dist/css/bootstrap.css";
// Uso de css para cada componente
import "./global.css";

import App from "./components/App";
//App se encarga de la navegacion de paginas
const container = document.getElementById("app");
ReactDOM.render(<App />, container);
