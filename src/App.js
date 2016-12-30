import React, { Component } from 'react';
import Display from './components/display';
import NumberList from './components/number/List';

class App extends Component {
  render() {
    return (
      <div className="container mt-2">
        <Display />
        <NumberList />
      </div>
    );
  }
}

export default App;
