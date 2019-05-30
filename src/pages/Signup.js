import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { SignupAction } from '../state/actions/authActions';
import '../css/login.css';
import '../css/new.css';
import '../css/main.css';
import '../css/responsive.css';

class Signup extends Component {
  state = {
    firstname: '',
    lastname: '',
    othername: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    error: '',
  };

  componentDidUpdate = (prevProps) => {
    if (this.props.auth.error !== prevProps.auth.error) {
      this.setState({ error: this.props.auth.error });
    }
  };

  inputChangeHandler = (e) => {
    this.setState({
      error: '',
      [e.target.name]: e.target.value,
    });
  };

  submitFormHandler = (e) => {
    e.preventDefault();
    this.props.SignupAction(
      {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,
      },
      this.props.history,
    );
  };

  render() {
    return (
      <section className="container">
        <div className="body-wrapper">
          <div className="login-div">
            <div className="topic-list-header center">USER SIGNUP</div>
            <form className="signupForm" onSubmit={this.submitFormHandler}>
              <div className="errorDiv">{this.state.error}</div>
              <div className="form-group">
                <label htmlFor="firstname">
                  Firstname<span>*</span>{' '}
                </label>
                <input
                  type="text"
                  required
                  name="firstname"
                  className="form-control"
                  value={this.state.firstname}
                  onChange={this.inputChangeHandler}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastname">
                  Lastname<span>*</span>{' '}
                </label>
                <input
                  type="text"
                  required
                  name="lastname"
                  className="form-control"
                  value={this.state.lastname}
                  onChange={this.inputChangeHandler}
                />
              </div>
              <div className="form-group">
                <label htmlFor="othername">Othername</label>
                <input
                  type="text"
                  name="othername"
                  className="form-control"
                  value={this.state.othername}
                  onChange={this.inputChangeHandler}
                />
              </div>

              <div className="form-group">
                <label htmlFor="username">Username </label>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  value={this.state.username}
                  onChange={this.inputChangeHandler}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  Email<span>*</span>{' '}
                </label>
                <input
                  type="email"
                  required
                  name="email"
                  className="form-control"
                  value={this.state.email}
                  onChange={this.inputChangeHandler}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">
                  Password<span>*</span>{' '}
                </label>
                <input
                  type="password"
                  required
                  name="password"
                  className="form-control"
                  value={this.state.password}
                  onChange={this.inputChangeHandler}
                />
              </div>
              <div className="form-group">
                <label className="confirmPassword" htmlFor="confirm-password">
                  Confirm Password<span>*</span>{' '}
                </label>
                <input
                  required
                  type="password"
                  name="confirmPassword"
                  className="form-control"
                  value={this.state.confirmPassword}
                  onChange={this.inputChangeHandler}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  className="form-control"
                  value={this.state.phoneNumber}
                  onChange={this.inputChangeHandler}
                />
              </div>
              <div className="form-group">
                <div className="form-group">
                  <ul className="terms-div" id="terms-div">
                    <li>Do not use any vulgar or inapproriate language </li>
                    <li>
                      Kindly read through a meetup previous question, to ensure
                      your question has not been asked by another user
                    </li>
                  </ul>
                  <p className="center">
                    Field mark with <span>*</span> are required
                  </p>
                </div>
                <button type="submit" name="signup" className="submitButton">
                  SIGNUP{' '}
                </button>
                <button type="button" className="cancelButton">
                  CANCEL{' '}
                </button>
                <h6 className="already-a-member  already-a-member2">
                  Already a member? <Link to="/login">SIGN IN</Link>
                </h6>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { SignupAction },
)(Signup);
