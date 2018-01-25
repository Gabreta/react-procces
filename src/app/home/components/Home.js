// Dependencies
import React, { Component } from 'react';

//Component
import Header from '../../layout/components/Header';

// Styles
import styles from './home.scss';

class Home extends Component {
  render() {
    return (
      <div className="context">
        <Header />
        <div className={styles.contexto_home}>
          <h1>Pagina Principal</h1>
        </div>
      </div>
    );
  }
}

export default Home;
