import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/login2.css';
import '../css/landing_page.css';
import '../css/new.css';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="login-container">
          <div className="info-container">
            <div className="content content-text">
              <h2>WELCOME TO QUESTIONER</h2>
              <p className="quest-text">
                Questioner helps meetup organizer prioritize questions to be
                answered. <br />
                Other users can vote on asked questions and they bubble to the
                top or bottom of the log.
              </p>
              <p>
                {' '}
                <Link className="getStarted" to="/login">
                  GET STARTED
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
