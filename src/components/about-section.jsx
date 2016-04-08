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
            </h1>
            <p>
              Turn your energy and free food into awesome projects by the end of one weekend. Bring your laptop, passion, smartphone, and whatever else you can manage to carry to this once-in-a-lifetime event and have some fun working alongside some of the best minds in Silicon Valley!</p>

            <h1>Location</h1>
            <p>

              Silicon Hacks will take place at a very special place in Silicon Valley, stay tuned and prepare to be amazed!

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
