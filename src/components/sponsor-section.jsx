const React = require('react');
// const Sponsors = require('./sponsors.jsx');

const SponsorSection = React.createClass({
  render() {
    return (
      <div id="sponsor" className="section">
        <div className="section-body">
          <div>
            <h1 style={{ marginBottom: '30px' }}>Sponsors</h1>
            <a href="https://www.ibm.com/" style={{ border: 'none' }}>
              <img src="assets/img/ibm.svg" height="120" alt="IBM" />
            </a>
            {/* <a href="https://freshprints.com/" style={{ border: 'none' }}>
              <img src="assets/img/freshprints.jpg" height="150" alt="freshprints" />
            </a>
            <a href="https://github.com/" style={{ border: 'none' }}>
              <img src="assets/img/github.png" height="120" alt="github" />
            </a> */}
          </div>
          <br />
          <div>
            <h1 style={{ marginBottom: '30px' }}>Partners</h1>
            <a href="https://mlh.io/" style={{ border: 'none', marginRight: '30px' }}>
              <img src="assets/img/mlh.png" height="80" alt="MLH" style={{ marginBottom: '30px' }} />
            </a>
            <a href="https://www.42.usa.org/" style={{ border: 'none' }}>
              <img src="assets/img/42.png" height="100" alt="42 USA" style={{ marginBottom: '30px' }} />
            </a>
            <a href="https://www.hackerearth.com/" style={{ border: 'none', marginRight: '30px' }}>
              <img src="assets/img/hackerearth.png" height="60" alt="HackerEarth" />
            </a>
            <a href="https://hacker.fund/" style={{ border: 'none', marginRight: '00px' }}>
              <img src="assets/img/hackerfund.png" height="60" alt="HackerFund" />
            </a>
          </div>
          <br />
          <br />
          <h1>Interested in Sponsoring?</h1>
          <a className="button green" href="https://siliconhacks.typeform.com/to/lzxr3H" target="_blank">Sponsor us</a>
          <p style={{ textAlign: 'center' }}>
            or email us at
            <a href="mailto:hacksilicon@gmail.com?subject=SiliconHacks%202.0%20Sponsorship%20Inquiry">
              hacksilicon@gmail.com
            </a>
          </p>
          <br />
        </div>
      </div>
    );
  },
});

module.exports = SponsorSection;
