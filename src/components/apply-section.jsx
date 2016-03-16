const React = require('react');

const ApplySection = React.createClass({
  render() {
    return (
      <div id="apply" className="section">
        <div className="desktop-img"></div>
        <div className="apply-container">
          <div className="apply-header">Applications are closed! Are you coming?</div>
          <a className="button apply rain-drake" href="#">I'm coming!</a>
        </div>
      </div>
    );
  },
});

module.exports = ApplySection;
