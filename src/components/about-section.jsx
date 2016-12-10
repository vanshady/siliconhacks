const React = require('react');

const AboutSection = React.createClass({
  render() {

    return (
      <div id="about" className="section">
        <div className="section-wrapper">
          <a id="mlh-trust-badge" href="https://mlh.io/seasons/na-2017/events?utm_source=na-2017&utm_medium=TrustBadge&utm_campaign=na-2017&utm_content=white" target="_blank">
            <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg" alt="Major League Hacking 2017 Hackathon Season" style={{ width: '100%' }} />
          </a>
          <div className="section-body">
            <h1>
              Come Hack With The Best
            </h1>
            <p>Turn your energy and free food into awesome projects by the end of one weekend. Bring your laptop, passion, smartphone, and whatever else you can manage to carry to this once-in-a-lifetime event and have some fun working alongside some of the best minds in Silicon Valley!</p>
          </div>
        </div>
        <div className="slant bottom left"></div>
      </div>
    );
  },
});

module.exports = AboutSection;
