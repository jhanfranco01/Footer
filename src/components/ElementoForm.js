import React from "react";

class ElementoForm extends React.Component {
  render() {
    return (
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Agregar Datos</h4>
        </div>
        <form>
          <div className="modal-body">
            <div className="form-group">
              <label>Primer Nombre</label>
              {/* Recibimos la variable OnChange que guarda el evento handleChange de la Pagina principal.

              Cada vez que un input realice una accion, el dato ingresado se le envia al evento principal handleChange la cual actualizara el estado.
              
              
              Al utilizar estados controlados, retornamos los estados actualizados de la clase principal  utilizando props mediante el parametro formValues*/}
              <input
                onChange={this.props.OnChange}
                className="form-control"
                type="text"
                name="PrimerNombre"
                value={this.props.formValues.PrimerNombre}
              />
            </div>
            <div className="form-group">
              <label>Segundo Nombre</label>
              <input
                onChange={this.props.OnChange}
                className="form-control"
                type="text"
                name="Nombre2"
                value={this.props.formValues.Nombre2}
              />
            </div>
            <div className="form-group">
              <label>Profesion</label>
              <input
                onChange={this.props.OnChange}
                className="form-control"
                type="text"
                name="Profesion"
                value={this.props.formValues.Profesion}
              />
            </div>
            <div className="form-group">
              <label>Twiter</label>
              <input
                onChange={this.props.OnChange}
                className="form-control"
                type="text"
                name="Twiter"
                value={this.props.formValues.Twiter}
              />
            </div>
          </div>
          <div className="modal-footer"></div>
        </form>
      </div>
    );
  }
}
export default ElementoForm;
