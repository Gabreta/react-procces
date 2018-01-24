//Dependencias
import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

//component basic
import Header from './layout/Header.jsx';

//components
import Home from './app/Home.jsx';
import Signup from './app/Signup.jsx';
import Login from './app/Login.jsx';
import Page404 from './app/Page404.jsx';

class App extends Component {
  render() {
    return (
      <div className="content">
        <Header />
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route component={Page404} />
        </Switch>
      </div>
    );
  }
};

export default App;
