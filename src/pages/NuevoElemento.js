import React from "react";
import "./styles/NuevoElemento.css";
import Elemento from "../components/Elemento";
import ElementoForm from "../components/ElementoForm";
import { Link } from "react-router-dom";

class NuevoElemento extends React.Component {
  // Creamos un estado que inicializa de manera vacia
  state = {
    form: {
      PrimerNombre: "",
      Nombre2: "",
      Profesion: "",
      Twiter: "",
    },
  };
  // Actualizamos los valores de los estado
  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  render() {
    return (
      <div>
        <div className="Elemento__hero"></div>

        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <br />
              {/* Enviamos variables a la clase elmento las cuales contienen los estados de cada componente */}
              <Elemento
                AvatarUrl="https://es.gravatar.com/userimage/184544648/2b3693f253b9ecd0b19825eaeb413e66.jpg"
                Nombre1={this.state.form.PrimerNombre}
                Nombre2={this.state.form.Nombre2}
                Trabajo={this.state.form.Profesion}
                Twiter={this.state.form.Twiter}
              />
            </div>

            <div className="col-xs-12 col-md-6">
              <br />
              {/* Enviamos el evento handleChange mediante la variable OnChange y los datos del estado mediante formValues */}
              <ElementoForm
                OnChange={this.handleChange}
                formValues={this.state.form}
              />
              <br />
            </div>
          </div>
          <div className="row">
            <div className="container">
              <div className="col-xs-12 col-md-12 ">
                <center>
                  <br />
                  <Link to="/" className="btn btn-danger">
                    Atras
                  </Link>
                  <br />
                  <br />
                  <br />
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default NuevoElemento;
