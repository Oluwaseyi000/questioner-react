import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../css/user/meetups.css';
import Aside from '../../components/Aside';
import { getMeetups } from '../../state/actions/meetupActions';

class Meetups extends Component {
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
      <section className="container">
        <div className="body-wrapper">
          <div id="msgAlert" />
          <div className="container-page">
            <div className="topic-list-header">MEETUPS</div>
            <div className="themeetup-list" id="meetup-lists">
              {meetups.map((meetup) => (
                <div className="single-meetup" key={meetup.id}>
                  <div>
                    <img
                      src={meetup.coverimage}
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
        <Aside />
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  meetups: state.meetup,
});
export default connect(
  mapStateToProps,
  { getMeetups },
)(Meetups);
