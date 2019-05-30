import React, { Component } from 'react';
import Pages from './Routes';
import Header from './components/Header';
import './css/main.css';
import './css/responsive.css';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Pages />
        <Footer />
      </div>
    );
  }
}

export default App;
