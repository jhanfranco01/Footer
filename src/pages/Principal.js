import React from "react";
import "./styles/Principal.css";
import DatosList from "../components/DatosList";
import Datos from "../DataBase/db.json";
import { Link } from "react-router-dom";

class Principal extends React.Component {
  render() {
    return (
      <div>
        <div className="Principal__hero"></div>
        <div className="Principal__container">
          <div className="container">
            <center>
              <h3 to="/principal/nuevo" className="">
                <strong>Lista de Usuarios</strong>
              </h3>
            </center>
          </div>
        </div>
        <div className="Principal__list">
          <div className="Principal__container">
            {/* Mediante la variable info enviamos los datos del JSON */}
            <DatosList info={Datos.datitos} />
          </div>
        </div>
        <div className="row">
          <div className="container">
            <div className="col-xs-12 col-md-12 ">
              <center>
                <br />
                {/* Usamos los Links para redireccionar a una pagina */}
                <Link to="/" className="btn btn-danger">
                  Atras
                </Link>
              </center>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Principal;
