import React, { Component } from 'react';
import { connect } from 'react-redux';

import testImage from './images/rose-blue-flower-rose-blooms-67636(1).jpeg';
import { getPosts } from './state/actions/authActions';

class App extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    return (
      <div>
        hello seyi dwebpakc
        <img src={testImage} alt="" />
      </div>
    );
  }
}
const mapStateToProp = (state) => ({
  posts: state.auth,
});

export default connect(
  mapStateToProp,
  { getPosts },
)(App);
