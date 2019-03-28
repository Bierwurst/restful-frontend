import React, { Component } from 'react';
import './App.css';
import InputForm from './components/InputForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>The frontend for RESTful Api training</h1>
        </header>
        <InputForm />
      </div>

    );
  }
}

export default App;
