//Dependencias
import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

//Asssets
import '../../../assets/sass/layout/global.scss';
import '../../../assets/sass/layout/header.scss';

class Header extends Component {
  render() {
    return (
      <header>
        <div class="header-titulo"><h3>Gabriel Vargas</h3></div>
        <nav>
          <ul>
            <li><Link to="/">Principal</Link></li>
            <li><Link to="/login">Ingreso</Link></li>
            <li><Link to="/signup">Registro</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
