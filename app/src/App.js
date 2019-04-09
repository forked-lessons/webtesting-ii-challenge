import React, { Component } from 'react';
import Dashboard from './components/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Lambda At Bat</h1>
        <Dashboard />
      </div>
    );
  }
}

export default App;
