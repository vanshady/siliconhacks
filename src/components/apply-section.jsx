const React = require('react');

const ApplySection = React.createClass({
  render() {
    return (
      <div id="apply" className="section">
        <div className="desktop-img"></div>
        <div className="apply-container">
          <div className="apply-header">Applications are closed.</div>
          <a className="button apply">Application Closed</a>
        </div>
      </div>
    );
  },
});

module.exports = ApplySection;
