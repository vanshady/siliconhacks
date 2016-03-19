const React = require('react');

const HeadSection = React.createClass({
  render() {
    return (
      <div id="landing" className="section full">
        <div id="landing-filter-hashtag-instagram-hashtag-besties-for-life-hashtag-no-filter-hashtag-slide-into-my-dms">
        </div>
        <div className="section-wrapper">
          <div id="copy-container">
            <div className="headline">SiliconHacks
              <span id="typed-cursor" className="blinking">|</span>
            </div>
            <div className="sub-headline">Calling all hackers. Dreamers. 4-A.M'ers</div>
            <div className="sub-headline mini">UC Berkeley | Oct. 9-11</div>
            <div className="button-container">
              <a className="button" href="live">Apply</a>
              <a className="button" href="">Sponsor Us</a>
            </div>
          </div>
        </div>
      </div>
    );
  },
});

module.exports = HeadSection;
