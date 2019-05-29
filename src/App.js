import React, { Component } from 'react';
import Pages from './Routes';
import Header from './components/Header';
import './css/main.css';
import './css/responsive.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Pages />
      </div>
    );
  }
}

export default App;
