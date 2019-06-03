import React, { Component } from 'react';
import Pages from './Routes';
import './css/login.css';
import './css/main.css';
import './css/responsive.css';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Pages />
        <Footer />
      </div>
    );
  }
}

export default App;
