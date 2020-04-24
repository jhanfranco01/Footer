import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Loggin from "../pages/Loggin";

import NuevoElemento from "../pages/NuevoElemento";

import Principal from "../pages/Principal";

function App() {
  return (
    // Creando la navegacion entre distintas paginas
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Loggin} />
        <Route exact path="/Usuarios" component={Principal} />
        <Route exact path="/principal" component={NuevoElemento} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
