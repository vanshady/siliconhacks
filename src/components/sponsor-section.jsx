const React = require('react');
// const Sponsors = require('./sponsors.jsx');

const SponsorSection = React.createClass({
  render() {
    return (
      <div id="general" className="section">
        <div className="section-body">
          <h1>Interested in Sponsoring?</h1>
          <br />
          <p style={{textAlign:"center"}}>
            Email us at
            <a href="mailto:hacksilicon@gmail.com?subject=SiliconHacks%202.0%20Sponsorship%20Inquiry">
              hacksilicon@gmail.com
            </a>
          </p>
        </div>
      </div>
    );
  },
});

module.exports = SponsorSection;
