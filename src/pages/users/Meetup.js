import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderLoggedin from '../../components/HeaderLogin';
import '../../css/user/meetup.css';
import Aside from '../../components/Aside';
import { getMeetup } from '../../state/actions/meetupActions';

class Meetup extends Component {
  state = {
    meetup: '',
  };

  componentDidMount = () => {
    this.props.getMeetup(this.props.match.params.id);
  };

  componentDidUpdate = (prevProps) => {
    if (this.props.meetup !== prevProps.meetup) {
      this.setState({ meetup: this.props.meetup });
    }
  };

  render() {
    const {
      topic,
      happeningon,
      location,
      host,
      qcount,
      rsvpcount,
      details,
      coverimage,
    } = this.state.meetup;

    return (
      <div>
        <HeaderLoggedin />

        <section className="container">
          <div className="body-wrapper">
            <div className="container-page">
              <div id="msgAlert" />
              <div className="topic-list-header">MEETUP</div>
              <div className="meetup-list" id="single-meetup">
                <section>
                  <div id="single-meetup-detail">
                    <div className="meetup-banner">
                      {' '}
                      <img src={coverimage} alt="" />
                    </div>
                    <div className="meetup-detail">
                      <div>
                        <div>
                          <h1 className="h1">{topic}</h1>
                        </div>
                        <p>
                          <span className="bold">
                            <i className="far fa-calendar" /> Date:
                          </span>{' '}
                          <span className="brown">
                            {' '}
                            {new Date(happeningon).toDateString()}
                          </span>{' '}
                        </p>
                        <p>
                          <span className="bold">
                            {' '}
                            <i className="fa fa-map-marker-alt" /> Location:
                          </span>
                          <span className="brown"> {location}</span>{' '}
                        </p>
                        <p>
                          <span className="bold">
                            {' '}
                            <i className="fa fa-user" /> Host:{' '}
                          </span>{' '}
                          <span className="brown">{host}</span>{' '}
                        </p>
                        <div>
                          <span className="bold">
                            {' '}
                            <i className="fa fa-question-circle" /> Question:
                          </span>{' '}
                          <span className="brown"> {qcount} </span>
                          <span className="bold">
                            <br /> <i className="fa fa-check" /> RSVPS:{' '}
                          </span>
                          <span className="brown"> {rsvpcount}</span>{' '}
                        </div>
                      </div>
                    </div>
                    <br />
                  </div>
                </section>

                <section>
                  <hr />
                  <h3 className="details">RSVP</h3>
                  <form action="" id="rsvpForm" className="RSVPdiv">
                    <label className="radioContainer">
                      <input type="radio" name="status" value="attending" />
                      <span className="checkmark" />
                      Attending
                    </label>
                    <label className="radioContainer">
                      <input type="radio" name="status" value="not sure" />
                      Not Sure
                      <span className="checkmark" />
                    </label>
                    <label className="radioContainer">
                      Not
                      <input type="radio" name="status" value="not attending" />
                      Attending
                      <span className="checkmark" />
                    </label>
                    <input
                      type="submit"
                      value="SUBMIT"
                      className="submitButton"
                    />
                  </form>
                </section>

                <hr />
                <section>
                  <div className="details">
                    <h3>Details</h3>
                    <div id="questionDetail">{details}</div>
                  </div>
                </section>

                <hr />
                <h3 className="details">Interested People (12)</h3>
                <section className="attendees">
                  <div className="attend-block">
                    <img
                      className="attendees"
                      src="../img/coming(1).jpeg"
                      alt=""
                    />
                    <p>Oluwaseyi</p>
                  </div>
                  <div className="attend-block">
                    <img
                      className="attendees"
                      src="../img/coming (2).jpeg"
                      alt=""
                    />
                    <p>Christian</p>
                  </div>
                  <div className="attend-block">
                    <img
                      className="attendees"
                      src="../img/coming (4).jpeg"
                      alt=""
                    />
                    <p>Kemi</p>
                  </div>
                  <div className="attend-block">
                    <img
                      className="attendees"
                      src="../img/coming(4).jpg"
                      alt=""
                    />
                    <p>Valetyy</p>
                  </div>
                </section>

                <hr />

                <h3 className="details">Discussion</h3>
                <div className="discussion">
                  <div id="alert2" className="msgAlert" />
                  <button
                    type="button"
                    className="submitButton"
                    id="askQuestionButton"
                  >
                    ASK QUESTION <i className="far fa-question-circle fa-1x" />
                  </button>

                  <form action="#/" id="postQuestionForm">
                    <input
                      type="text"
                      required=""
                      name="title"
                      placeholder="Question title here"
                      className="form-control question-title"
                    />

                    <textarea
                      required=""
                      name="body"
                      placeholder=" Question Body Here"
                      id="post-question"
                      className="quesstion-textarea"
                    />
                    <br />
                    <button type="button" className="submitButton">
                      Submit
                    </button>
                  </form>
                  <div className="QCDiv" id="questions-list">
                    <div className="questionDiv ">
                      <span>
                        Question by<a href="#//"> Adebajo </a>on Fri Feb 08 2019
                      </span>
                      <br />
                      <span className="underline"> swimming thrunk</span>
                      <br />
                      What is the best swimming thrunk
                      <p>
                        <a href="#//" id="upvote ">
                          <i className="far fa-thumbs-up fa-2xs" />
                        </a>{' '}
                        <span className="votecount fa-2xs">(0)</span>
                        <a href="#//" id="downvote">
                          <i className="far fa-thumbs-down fa-2xs" />{' '}
                        </a>
                      </p>
                      <p />
                    </div>
                    <div id="comments-list-44">
                      <div className="commentDiv">
                        <span>
                          Comment by <a href="#//">Adebajo</a> on Fri Feb 08
                          2019
                        </span>
                        <br />I think you should just go with the anyone
                      </div>

                      <div className="commentDiv">
                        <span>
                          Comment by <a href="#//">Adebajo</a> on Fri Feb 08
                          2019
                        </span>
                        <br />
                        comment 2
                      </div>
                    </div>
                    <div>
                      <form
                        name="commentForm44"
                        id="cform44"
                        action=""
                        className="postCommentForm"
                      >
                        <textarea
                          require=""
                          id="commentbody44"
                          name="post-comment-textarea"
                          className="post-comment-textarea"
                          placeholder="Comment on Adebajo Question"
                        />
                        <input
                          type="button"
                          value="Comment"
                          className="submitButton commentButton"
                        />
                      </form>
                    </div>
                  </div>

                  <div className="QCDiv">
                    <div id="ask-question-div" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Aside />
        </section>
      </div>
    );
  }
}

const mapStateToProp = (state) => ({
  meetup: state.meetup.meetup,
});

export default connect(
  mapStateToProp,
  { getMeetup },
)(Meetup);
