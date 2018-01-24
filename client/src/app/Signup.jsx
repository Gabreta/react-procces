//Dependencias
import React, { Component } from 'react';

//Asssets
import '../../../assets/sass/Sesion/signup.scss';

class Signup extends Component {
  render() {
    return (
      <div class="App">
        <fieldset class="clase">
          <div class="register-box">
            <p class="datos">Nombre:</p><input type="text" name="name" />
            <p class="datos">Email:</p><input type="text" name="email" />
            <p class="datos">Usuario:</p><input type="text" name="user" />
            <p class="datos">Contraseña:</p><input type="password" name="password" />
            <button class="boton">Registrar</button>
          </div>
        </fieldset>
      </div>
    );
  }
}

export default Signup;
