import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { LoginAction } from '../state/actions/authActions';

import '../css/login.css';
import '../css/new.css';
import '../css/user/new2.css';

class Login extends Component {
  state = {
    email: '',
    password: '',
    signinError: '',
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.props.LoginAction(
      { email: this.state.email, password: this.state.password },
      this.props.history,
    );
  };

  inputChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  resetHandler = () => {
    this.setState({
      email: '',
      password: '',
    });
  };

  componentDidUpdate = (prevProps) => {
    if (this.props.auth.error !== prevProps.auth.error) {
      this.setState({
        signinError: this.props.auth.error,
      });
    }
  };

  render() {
    return (
      <section className="container ">
        <div className=" margin80 body-wrapper ">
          <div className="login-div">
            <div className="topic-list-header center">USER LOGIN </div>

            <form onSubmit={this.submitHandler} className="signupForm">
              <p className="errorDiv center">{this.state.signinError}</p>

              <div className="forssm-group">
                <label htmlFor="email">
                  Email <span>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  value={this.state.email}
                  onChange={this.inputChangeHandler}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">
                  Password <span>*</span>
                </label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  value={this.state.password}
                  onChange={this.inputChangeHandler}
                />
              </div>
              <div className="authBtn">
                <div className="form-group">
                  <button type="submit" className="submitButton">
                    LOG IN
                  </button>
                  <button
                    type="button"
                    onClick={this.resetHandler}
                    className="cancelButton"
                  >
                    RESET
                  </button>
                </div>

                <h6 className="already-a-member">
                  New to Questioner?
                  <Link to="/signup"> SIGN UP</Link>
                </h6>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProp = (state) => ({
  auth: state.auth,
});

export default connect(
  mapStateToProp,
  { LoginAction },
)(Login);
