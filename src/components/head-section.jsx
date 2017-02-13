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
            </div>
            <div className="sub-headline">INVITING EVERY HACKER. DESIGNER. INNOVATOR. NIGHT
              OWL.</div>
            <div className="sub-headline mini">LOCATION: 42 USA - Fremont, CA | TIME: May
              6-7, 2017
            </div>
            <div className="button-container">
              <a className="button" href="https://siliconhacks.typeform.com/to/wK5Mls" target="_blank">Apply</a>
              <a className="button" href="https://siliconhacks.typeform.com/to/lzxr3H" target="_blank">Sponsor Us</a>
            </div>
          </div>
        </div>
      </div>
    );
  },
});

module.exports = HeadSection;
