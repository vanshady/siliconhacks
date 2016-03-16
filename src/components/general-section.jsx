const React = require('react');

const pStyle = {
  textAlign: "center"
};

const GeneralSection = React.createClass({
  render() {
    return (
      <div id="general" className="section">
        <div className="section-wrapper">
          <div className="section-body">
            <h1>Schedule
              <img className="emoji" src="assets/img/emoji/party_popper.png" />
            </h1>
            <p style={pStyle}>
              <b>Setup Begins:</b>
              Friday, Oct 9 @ 6 PM<br />
              <b>Hacker Registration Begins:</b>
              Friday, Oct 9 @ 7 PM<br />
              <b>Opening Ceremonies:</b>
              Friday, Oct 9 @ 9 PM<br />
              <b>Hacking Begins:</b>
              Friday, Oct 9 @ 11 PM<br />
              <b>Hacking Ends:</b>
              Sunday, Oct 11 @ 10 AM<br />
              <b>Science Fair Style Project Expo:</b>
              Sunday, Oct 11 @ 11 AM<br />
              <b>Closing Ceremonies:</b>
              Sunday, Oct 11 @ 2 PM
            </p>
            <a href="live">Click here for more info!</a>
            <br /><br />
          </div>
        </div>
        <div className="slant bottom right"></div>
      </div>
    );
  },
});

module.exports = GeneralSection;
