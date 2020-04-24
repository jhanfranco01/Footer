import React from "react";

import "./styles/Loggin.css";
import LogginForms from "../components/LogginForm";

class Loggin extends React.Component {
  render() {
    return (
      <div>
        <div className="Seccion"></div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-3"></div>
            <div className="col-xs-12 col-md-6">
              {/* Llamando al formulario de Login */}
              <LogginForms />
            </div>
            <div className="col-xs-12 col-md-3"></div>
          </div>
        </div>
      </div>
    );
  }
}
export default Loggin;
