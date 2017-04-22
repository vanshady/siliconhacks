const React = require('react');
// const Sponsors = require('./sponsors.jsx');

const blockStyle = {
  display: 'block',
  marginBottom: '20px',
};

const imgStyle = {
  marginBottom: '20px',
};

const SponsorSection = React.createClass({
  render() {
    return (
      <div id="sponsor" className="section">
        <div className="section-body">
          <div>
            <h1 style={{ marginBottom: '30px' }}>Sponsors</h1>
            <div style={blockStyle}>
              <a href="https://www.ibm.com/" style={{ border: 'none' }}>
                <img src="assets/img/ibm.svg" height="100" alt="IBM" style={imgStyle} />
              </a>
            </div>
            <div style={blockStyle}>
              <a href="http://www.mst.com/msei/index.html" style={{ border: 'none', marginRight: '20px' }}>
                <img src="assets/img/msei.jpg" height="60" alt="MSEI" style={imgStyle} />
              </a>
              <a href="https://www.proofpoint.com/us" style={{ border: 'none' }}>
                <img src="assets/img/proofpoint.svg" height="40" alt="proofpoint" style={imgStyle} />
              </a>
            </div>
            <div style={blockStyle}>
              <a href="https://github.com/" style={{ border: 'none', marginRight: '20px' }}>
                <img src="assets/img/github.png" height="40" alt="github" style={imgStyle} />
              </a>
              <a href="http://www.wolfram.com/" style={{ border: 'none', marginRight: '20px' }}>
                <img src="assets/img/wolfram.png" height="60" alt="wolfram" style={imgStyle} />
              </a>
              <a href="http://www.draperuniversity.com/" style={{ border: 'none', marginRight: '20px' }}>
                <img src="assets/img/DraperU.png" height="55" alt="DraperUniversity" style={imgStyle} />
              </a>
              <a href="http://get.tech/" style={{ border: 'none', marginRight: '20px' }}>
                <img src="assets/img/dot-tech.png" height="55" alt=".tech" style={imgStyle} />
              </a>
            </div>
            <div style={blockStyle}>
              <a href="https://www.jetbrains.com/" style={{ border: 'none', marginRight: '20px' }}>
                <img src="assets/img/jetbrains.png" height="90" alt="JetBrains" style={imgStyle} />
              </a>
              <a href="http://guayaki.com/" style={{ border: 'none', marginRight: '20px' }}>
                <img src="assets/img/yerba_mate.jpg" height="90" alt="YerbaMate" style={imgStyle} />
              </a>
              <a href="http://guayaki.com/" style={{ border: 'none' }}>
                <img src="assets/img/imperfectproduce.jpg" height="95" alt="ImperfectProduce" style={imgStyle} />
              </a>
              <a href="http://www.drinkbai.com/" style={{ border: 'none' }}>
                <img src="assets/img/bai.png" height="90" alt="Bai" style={imgStyle} />
              </a>
              <a href="https://www.makeschool.com/" style={{ border: 'none' }}>
                <img src="assets/img/makeschool.png" height="120" alt="MakeSchool" style={imgStyle} />
              </a>
            </div>
          </div>
          <br />
          <div>
            <h1 style={{ marginBottom: '30px' }}>Partners</h1>
            <div style={blockStyle}>
              <a href="https://mlh.io/" style={{ border: 'none', marginRight: '30px' }}>
                <img src="assets/img/mlh.png" height="80" alt="MLH" style={imgStyle} />
              </a>
              <a href="https://www.42.us.org/" style={{ border: 'none', marginRight: '30px' }}>
                <img src="assets/img/42.png" height="100" alt="42 USA" style={imgStyle} />
              </a>
              <a href="https://www.hackerearth.com/" style={{ border: 'none' }}>
                <img src="assets/img/hackerearth.png" height="60" alt="HackerEarth" style={imgStyle} />
              </a>
            </div>
            <div style={blockStyle}>
              <a href="https://hacker.fund/" style={{ border: 'none', marginRight: '30px' }}>
                <img src="assets/img/hackerfund.png" height="60" alt="HackerFund" style={imgStyle} />
              </a>
              <a href="https://www.hackplus.io/" style={{ border: 'none' }}>
                <img src="assets/img/hackplus.png" height="50" alt="Hack+" style={imgStyle} />
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
