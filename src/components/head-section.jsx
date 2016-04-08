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
            <div className="sub-headline">INVITING EVERY HACKER. DESIGNER. INNOVATOR. NIGHT OWL.</div>
            <div className="sub-headline mini">LOCATION: TBA | TIME: FALL 2016</div>
            <div className="button-container">
              <a className="button" href="https://siliconhacks.typeform.com/to/lzxr3H" target="_blank">Apply</a>
              <a className="button" href="">Sponsor Us</a>
            </div>
          </div>
        </div>
      </div>
    );
  },
});

module.exports = HeadSection;
