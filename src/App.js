import React, { Component } from 'react';
import './App.css';
import fire from './Config/Config';
import Register from './Components/AddStudent/AddStudent'

class App extends Component {
  render() {
    return (
      <div>
        <Register/>
      </div>
    );
  }
}

export default App;
