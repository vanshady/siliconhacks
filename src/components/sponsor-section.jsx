const React = require('react');
const Sponsors = require('./sponsors.jsx');

const SponsorSection = React.createClass({
  render() {
    return (
      <div id="sponsor" className="section">
        <div className="section-body">
          <h1>Interested in Sponsoring?</h1>

          <p>
            Email us at
            <a href="mailto:sponsorship@calhacks.io?subject=Cal%20Hacks%202.0%20Sponsorship%20Inquiry">sponsorship@calhacks.io</a>
          </p>
        </div>
        <Sponsors />
      </div>
    );
  },
});

module.exports = SponsorSection;