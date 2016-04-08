const React = require('react');
const Schedules = require('./schedules.jsx');

const GeneralSection = React.createClass({
  render() {
    const generalSectionStyle = {
      backgroundColor: 'white',
      paddingBottom: '60px',
      paddingTop: '120px',
    };

    return (
      <div id="general" className="section" style={generalSectionStyle}>
        <div className="section-wrapper">
          <div className="section-body">
            <h1>Schedule</h1>
            <Schedules />
            <br /><br />
          </div>
        </div>
        <div className="slant bottom right"></div>
      </div>
    );
  },
});

module.exports = GeneralSection;
