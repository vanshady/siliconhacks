const React = require('react');
// const Sponsors = require('./sponsors.jsx');

const SponsorSection = React.createClass({
  render() {
    return (
      <div id="sponsor" className="section">
        <div className="section-body">
          <div>
            <h1 style={{ marginBottom: '30px' }}>Sponsors</h1>
            <div style={{ display: 'block', marginBottom: '50px' }}>
              <a href="https://www.ibm.com/" style={{ border: 'none' }}>
                <img src="assets/img/ibm.svg" height="100" alt="IBM" />
              </a>
            </div>
            <div style={{ display: 'block', marginBottom: '50px' }}>
              <a href="http://www.mst.com/msei/index.html" style={{ border: 'none', marginRight: '20px' }}>
                <img src="assets/img/msei.jpg" height="60" alt="MSEI" />
              </a>
              <a href="https://www.proofpoint.com/us" style={{ border: 'none' }}>
                <img src="assets/img/proofpoint.svg" height="40" alt="proofpoint" />
              </a>
            </div>
            <div style={{ display: 'block', marginBottom: '50px' }}>
              <a href="https://github.com/" style={{ border: 'none', marginRight: '20px' }}>
                <img src="assets/img/github.png" height="40" alt="github" />
              </a>
              <a href="http://www.wolfram.com/" style={{ border: 'none', marginRight: '20px' }}>
                <img src="assets/img/wolfram.png" height="60" alt="wolfram" />
              </a>
              <a href="http://www.draperuniversity.com/" style={{ border: 'none', marginRight: '20px' }}>
                <img src="assets/img/DraperU.png" height="55" alt="DraperUniversity" />
              </a>
              <a href="http://get.tech/" style={{ border: 'none', marginRight: '20px' }}>
                <img src="assets/img/dot-tech.png" height="55" alt=".tech" style={{ backgroundColor: 'black' }} />
              </a>
            </div>
            <div style={{ display: 'block', marginBottom: '50px' }}>
              <a href="https://www.jetbrains.com/" style={{ border: 'none', marginRight: '20px' }}>
                <img src="assets/img/jetbrains.png" height="90" alt="JetBrains" />
              </a>
              <a href="http://guayaki.com/" style={{ border: 'none' }}>
                <img src="assets/img/yerba_mate.jpg" height="90" alt="YerbaMate" />
              </a>
            </div>
          </div>
          <br />
          <div>
            <h1 style={{ marginBottom: '30px' }}>Partners</h1>
            <div style={{ display: 'block', marginBottom: '50px' }}>
              <a href="https://mlh.io/" style={{ border: 'none', marginRight: '30px' }}>
                <img src="assets/img/mlh.png" height="80" alt="MLH" />
              </a>
              <a href="https://www.42.us.org/" style={{ border: 'none' }}>
                <img src="assets/img/42.png" height="100" alt="42 USA" style={{ marginRight: '30px' }} />
              </a>
              <a href="https://www.hackerearth.com/" style={{ border: 'none' }}>
                <img src="assets/img/hackerearth.png" height="60" alt="HackerEarth" />
              </a>
            </div>
            <div style={{ display: 'block', marginBottom: '50px' }}>
              <a href="https://hacker.fund/" style={{ border: 'none' }}>
                <img src="assets/img/hackerfund.png" height="60" alt="HackerFund" style={{ marginRight: '30px' }} />
              </a>
              <a href="https://www.hackplus.io/" style={{ border: 'none' }}>
                <img src="assets/img/hackplus.png" height="50" alt="Hack+" style={{ marginBottom: '20px' }} />
              </a>
            </div>
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
