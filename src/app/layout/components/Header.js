//Dependencias
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Asssets
import './header.scss';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-titulo"><h3>Gabriel Vargas</h3></div>
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
