import React from "react";
import "./styles/LogginForms.css";
import confLogo from "../images/logo_horizontal.png";
import Dato from "../DataBase/db.json";

import { Link, Redirect } from "react-router-dom";

class LogginForms extends React.Component {
  state = {
    Usuario: "",
    Contraseña: "",
    redirecOn: false,
  };

  handleChangeInput = (e) => {
    // Enviando nuevos valores al state
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // handleChangeContraseña = (e) => {
  //   console.log({ value: e.target.value, name: e.target.name });
  // };

  handleSubmit = (e) => {
    //Prevenimos la recarga de la pagina
    e.preventDefault();
    //Comprobamos los nuevos valores del state
    console.log(this.state);
    // Recorrer el json instanciando una variable
    Dato.datitos.map((datito) => {
      if (
        datito.Usuario === this.state.Usuario &&
        datito.Contra === this.state.Contraseña
      ) {
        console.log("Usuario Correcto");
        //Enviamos un nuevo estado para redirecOn
        this.setState({
          redirecOn: true,
        });
      }
    });
  };
  render() {
    return (
      <div className="Form">
        <div className="Form__header">
          <img src={confLogo} alt="Logo " width="220px" />
        </div>

        <div className="Form__section-name">
          <h1>Acceso al Sistema</h1>
        </div>

        <div className="Form__section-info ">
          <form onClick={this.handleSubmit}>
            <div className="form-group">
              <label>Usuario</label>
              <input
                onChange={this.handleChangeInput}
                className="form-control"
                type="text"
                name="Usuario"
                value={this.state.Usuario}
              />
            </div>
            <div className="form-group">
              <label>Contraseña</label>
              <input
                onChange={this.handleChangeInput}
                className="form-control"
                type="password"
                name="Contraseña"
                value={this.state.Contraseña}
              />
            </div>
            <button className="btn btn-primary">Acceder</button>
          </form>
        </div>

        <div>
          {/* Accedemos a la lista de Usuarios */}
          <Link to="/Usuarios" className="Form__link">
            Lista de Usuarios
          </Link>
        </div>
        {/* Cuando obtengamos un estado verdadero del valor redicOn, nos redireccionara a la pagina principal, si el estado es falso no realizara ninguna accion */}
        {this.state.redirecOn ? <Redirect to="/principal"></Redirect> : null}
      </div>
    );
  }
}
export default LogginForms;
