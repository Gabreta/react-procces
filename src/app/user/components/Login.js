//Dependencias
import React, { Component } from 'react';

//Component
import Header from '../../layout/components/Header';

//Asssets
import styles from './login.scss';

class Login extends Component {
  render() {
    return (
      <div className={styles.main}>
        <Header />
        <fieldset className={styles.clase}>
          <div className={styles.login_box}>
            <p className={styles.datos1}>Usuario:</p><input className={styles.i1} type="text" name="user" />
            <p className={styles.datos2}>Contraseña:</p><input className={styles.i2} type="password" name="pass" />
            <button className={styles.boton}>Ingresar</button>
          </div>
        </fieldset>
      </div>
    );
  }
}

export default Login;
