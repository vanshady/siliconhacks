const React = require('react');

const AboutSection = React.createClass({
  render() {
    return (
      <div id="about" className="section">
        <div className="section-wrapper">
          <img id="instructions" src="assets/img/instructions.svg" />
          <div className="section-body">
            <h1>
              Come Hack with Us
              <img className="emoji" src="assets/img/emoji/sunglasses.png" />
            </h1>
            <p>
              A hackathon is where your crazy ideas become reality.
              Build something: an app, a website, a game, a Slackbot,
              <em>anything</em>.
              The possibilities are limitless. Break things. Do something
              you've never done before. Move quickly&mdash;you only have 36
              hours! Grab your breadboards, charge your laptops, and
              put on your Oculi. Let's hack!</p>

            <h1>Location</h1>
            <p>

              Silicon Hacks will take place at
              <a href="http://www.californiamemorialstadium.com/">California
              Memorial Stadium</a>, on Piedmont Avenue on the east side of UC
              Berkeley campus. The address is:
              <a href="https://goo.gl/maps/jX538">2227 Piedmont Ave Berkeley,
               CA 94720
              </a>

              <br /><br />

              See you there :)

            </p>
          </div>
        </div>
        <div className="slant bottom left"></div>
      </div>
    );
  },
});

module.exports = AboutSection;
