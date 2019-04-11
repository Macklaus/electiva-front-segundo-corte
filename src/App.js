import React, { Component } from 'react';
import './App.css';
import Router from './router';
import Navbar from './components/navbar/navbar';

class App extends Component {
  render() {
    var userLogged = true;
    return (
      <div>
          <Navbar userlogged={userLogged}/>
          <Router/>
      </div>
    );
  }
}

export default App;
