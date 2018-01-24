//Dependencias
import React, { Component } from 'react';

//Asssets
import '../../../assets/sass/Sesion/login.scss';

class Login extends Component {
  render() {
    return (
      <div className="main">
        <fieldset className="clase">
          <div className="login-box">
            <p className="datos1">Usuario:</p><input class="i1" type="text" name="user" />
            <p className="datos2">Contraseña:</p><input class="i2" type="password" name="pass" />
            <button className="boton">Ingresar</button>
          </div>
        </fieldset>
      </div>
    );
  }
}

export default Login;
