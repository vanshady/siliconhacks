const React = require('react');

const AboutSection = React.createClass({
  render() {
    // const aboutStyle = {
    //   backgroundColor: 'white',
    // };
    return (
      <div id="about" className="section">
        <div className="section-wrapper">
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
              SOME PLACE. The address is:
              ADDRESS

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
