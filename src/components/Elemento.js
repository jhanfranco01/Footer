import React from "react";
import "./styles/Elemento.css";

class Elemento extends React.Component {
  render() {
    // Cargamos los datos mediante los props de las variables enviadas por la clase principal
    return (
      <div className="Elemento">
        <div className="Elemento__header"></div>

        <div className="Elemento__section-name">
          <img
            className="Elemento__avatar"
            src={this.props.AvatarUrl}
            alt="Imagen"
          />
          <h1>
            {this.props.Nombre1} <br /> {this.props.Nombre2}
          </h1>
        </div>

        <div className="Elemento__section-info ">
          <h3>{this.props.Trabajo}</h3>
          <div>
            <span className="Twitter__logo"></span>@{this.props.Twiter}
          </div>
        </div>

        <div className="Elemento__footer">#MisDatos</div>
      </div>
    );
  }
}
export default Elemento;
