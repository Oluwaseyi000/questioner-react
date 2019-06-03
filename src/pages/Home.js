import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../css/login2.css';
import '../css/landing_page.css';
import '../css/new.css';
import Header from '../components/Header';
import { getMeetups } from '../state/actions/meetupActions';

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80';

class Home extends Component {
  state = {
    meetups: [],
  };

  componentDidMount = () => {
    this.props.getMeetups();
  };

  componentDidUpdate = (prevProps) => {
    if (this.props.meetups !== prevProps.meetups) {
      this.setState({ meetups: this.props.meetups.meetups });
    }
  };

  render() {
    const { meetups } = this.state;

    return (
      <div>
        <Header />
        <div className="overlay">
          <div className="fix">
            <div className="login-contain">
              <div className="cover-container">
                <div className="welcome-text content-text">
                  <h2>WELCOME TO QUESTIONER</h2>
                  <p className="quesst-text">
                    Questioner helps meetup organizer prioritize questions to be
                    answered. <br />
                    Other users can vote on asked questions and they bubble to
                    the top or bottom of the log.
                  </p>
                  <p>
                    <Link className="getStarted" to="/login">
                      GET STARTED
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-about">
          <div className="section-content">
            {meetups.map((meetup) => (
              <div className="single-meetup" key={meetup.id}>
                <div>
                  <img
                    src={meetup.coverimage || DEFAULT_IMAGE}
                    className="list-image"
                    alt="coverImage"
                  />
                </div>
                <div className="list-detailss">
                  <div>
                    <Link
                      to={`/meetups/${meetup.id}`}
                      className="question-header"
                    >
                      {meetup.topic}
                    </Link>
                  </div>
                  <div />
                  <p>
                    <span className="bold">
                      <i className="far fa-calendar" /> Date:
                    </span>
                    <span className="brown">
                      {' '}
                      {new Date(meetup.happeningon).toDateString()}
                    </span>
                  </p>
                  <p>
                    <span className="bold">
                      <i className="fa fa-map-marker-alt" /> Location:
                    </span>
                    <span className="brown">{meetup.location}</span>
                  </p>
                  <div>
                    <span className="bold">
                      <i className="fa fa-question-circle" /> Question:
                    </span>
                    {meetup.qcount} <span className="brown" />
                    <span className="bold">
                      <br /> <i className="fa fa-check" /> RSVPS:
                    </span>
                    <span className="brown"> {meetup.rsvpcount}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  meetups: state.meetup,
});
export default connect(
  mapStateToProps,
  { getMeetups },
)(Home);
