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
            <div className="sub-headline mini">LOCATION: 42 Silicon Valley - Fremont, CA | TIME: May
              6-7, 2017
            </div>
            <div className="button-container">
              <a className="button">Application Closed</a>
              <a className="button" href="https://siliconhacks.typeform.com/to/ON7ar6" target="_blank">Mentor</a>
              <a className="button" href="https://siliconhacks.typeform.com/to/lzxr3H" target="_blank">Sponsor Us</a>
              <a className="button" href="https://donorbox.org/siliconhacks?recurring=true" target="_blank">Donate</a>
            </div>
          </div>
        </div>
      </div>
    );
  },
});

module.exports = HeadSection;
