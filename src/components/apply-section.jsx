const React = require('react');

const ApplySection = React.createClass({
  render() {
    return (
      <div id="apply" className="section">
        <div className="desktop-img"></div>
        <div className="apply-container">
          <div className="apply-header">Applications are now open!</div>
          <a className="button apply" href="https://siliconhacks.typeform.com/to/wK5Mls" target="_blank">Apply</a>
        </div>
      </div>
    );
  },
});

module.exports = ApplySection;
