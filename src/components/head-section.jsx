const React = require('react');

const HeadSection = React.createClass({
  render() {
    return (
      <div id="landing" className="section full">
        <div id="landing-filter">
        </div>
        <div className="section-wrapper">
          <div id="copy-container">
            <div className="headline">SiliconHacks
              <span id="typed-cursor" className="blinking">|</span>
            </div>
            <div className="sub-headline">Calling all hackers. Dreamers. 4-A.M'ers</div>
            <div className="sub-headline mini">UC Berkeley | Oct. 9-11</div>
            <div className="button-container">
              <a className="button" href="https://siliconhacks.typeform.com/to/wK5Mls" target="_blank">Apply</a>
              <a className="button" href="">Sponsor Us</a>
            </div>
          </div>
        </div>
      </div>
    );
  },
});

module.exports = HeadSection;
