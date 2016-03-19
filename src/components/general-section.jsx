const React = require('react');
const Schedules = require('./schedules.jsx');

const GeneralSection = React.createClass({
  render() {
    return (
      <div id="general" className="section">
        <div className="section-wrapper">
          <div className="section-body">
            <h1>Schedule
              <img className="emoji" src="assets/img/emoji/party_popper.png" />
            </h1>
            <Schedules />
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
