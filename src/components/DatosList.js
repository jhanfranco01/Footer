import React from "react";
import "./styles/DatosList.css";

class DatosList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled BadgesList">
        {/* Resepcionamos la variable info por medio de los props.
            Realizamos un recorrido del JSON e imprimimos los datos solicitados */}
        {this.props.info.map((datos) => {
          return (
            <li key={datos.id} className="BadgesListItem">
              <img
                src={datos.avatarUrl}
                alt=""
                className="BadgesListItem__avatar"
              />
              <div>
                <div>
                  <strong>
                    {datos.PrimerNombre}
                    &nbsp;
                    {datos.Nombre2}
                  </strong>
                </div>
                <div className="Twitter__name">
                  <span className="Twitter__logo"></span>@{datos.Twiter}
                </div>
                <div>{datos.Profesion}</div>
                <div>
                  <small>
                    <strong>Usuario: </strong>
                    {datos.Usuario}
                  </small>
                </div>
                <div>
                  <small>
                    <strong>Contraseña: </strong>
                    {datos.Contra}
                  </small>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}
export default DatosList;
