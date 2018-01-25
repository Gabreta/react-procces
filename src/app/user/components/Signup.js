//Dependencias
import React, { Component } from 'react';

//Component
import Header from '../../layout/components/Header';

//Asssets
import styles from './signup.scss';

class Signup extends Component {
  render() {
    return (
      <div className={styles.main}>
        <Header />
        <fieldset className={styles.clase}>
          <div className={styles.register_box}>
            <p className={styles.datos}>Nombre:</p><input type="text" name="name" />
            <p className={styles.datos}>Email:</p><input type="text" name="email" />
            <p className={styles.datos}>Usuario:</p><input type="text" name="user" />
            <p className={styles.datos}>Contraseña:</p><input type="password" name="password" />
            <button className={styles.boton}>Registrar</button>
          </div>
        </fieldset>
      </div>
    );
  }
}

export default Signup;
