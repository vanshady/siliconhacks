const React = require('react');
const FaqSection = require('./faq-section.jsx');
const Sponsors = require('./sponsors.jsx');
const index = React.createClass({

  render() {
    return (
      <div id="overflow-wrapper">
        <nav id="nav">
          <img id="logo_white" className="logo" src="assets/img/logo_white.svg" alt="Calhacks" />
          <img id="logo_orange" className="logo" src="assets/img/logo_orange.svg" alt="Calhacks" />
          <img id="menu_white" className="nav-menu" src="assets/img/menu_white.svg" alt="" />
          <img id="menu_orange" className="nav-menu" src="assets/img/menu_orange.svg" alt="" />
          <div id="nav-sections">
            <div id="nav-close" className="nav-section">x</div>
            <div className="nav-section active">
              <a href="#landing">Home</a>
            </div>
            <div className="nav-section">
              <a href="#about">About</a>
            </div>
            <div className="nav-section">
              <a href="#apply">Apply</a>
            </div>
            <div className="nav-section">
              <a href="#sponsor">Sponsor</a>
            </div>
          </div>
        </nav>
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
                <a className="button live" href="live">Live</a>
                <a className="button" href="http://meerkatapp.co/calhacks">Stream</a>
              </div>
            </div>
          </div>
        </div>
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

        <FaqSection />

        <div id="general" className="section">
          <div className="section-wrapper">
            <div className="section-body">
              <h1>Schedule
                <img className="emoji" src="assets/img/emoji/party_popper.png" />
              </h1>
              <p>
                {/* style="text-align:center"*/}
                <b>Setup Begins:</b>
                Friday, Oct 9 @ 6 PM<br />
                <b>Hacker Registration Begins:</b>
                Friday, Oct 9 @ 7 PM<br />
                <b>Opening Ceremonies:</b>
                Friday, Oct 9 @ 9 PM<br />
                <b>Hacking Begins:</b>
                Friday, Oct 9 @ 11 PM<br />
                <b>Hacking Ends:</b>
                Sunday, Oct 11 @ 10 AM<br />
                <b>Science Fair Style Project Expo:</b>
                Sunday, Oct 11 @ 11 AM<br />
                <b>Closing Ceremonies:</b>
                Sunday, Oct 11 @ 2 PM
              </p>
              <a href="live">Click here for more info!</a>
              <br /><br />
            </div>
          </div>
          <div className="slant bottom right"></div>
        </div>
        <div id="apply" className="section">
          <div className="desktop-img"></div>
          <div className="apply-container">
            <div className="apply-header">Applications are closed! Are you coming?</div>
            <a className="button apply rain-drake" href="#">I'm coming!</a>
          </div>
        </div>

        <div id="sponsor" className="section">
          <div className="section-body">
            <h1>Interested in Sponsoring?</h1>

            <p>
              Email us at
              <a href="mailto:sponsorship@calhacks.io?subject=Cal%20Hacks%202.0%20Sponsorship%20Inquiry">sponsorship@calhacks.io</a>
            </p>
          </div>
          <Sponsors />
        </div>

        <div className="section" id="footer">
          <a href="https://www.facebook.com/CalHacks" target="_blank" className="social">
            <img src="assets/img/facebook.svg" alt="Facebook" />
          </a>
          <a href="https://twitter.com/calhacks" target="_blank" className="social">
            <img src="assets/img/twitter.svg" alt="Twitter" />
          </a>
          <a href="mailto:team@calhacks.io" target="_blank" className="social">
            <img src="assets/img/mail.svg" alt="Email" />
          </a>
          <a href="https://instagram.com/calhacks" target="_blank" className="social instagram">
            <img src="assets/img/instagram.svg" alt="Instagram" />
          </a>
          <p>Made with &hearts; by the Cal Hacks team! Contact us at
            <a href="mailto:team@calhacks.io">team@calhacks.io</a>
          </p>
          <p className="credit">Credit:
            <a href="http://www.freepik.com/">freepik</a>
            for the desktop illustration
          </p>
        </div>
      </div>

    );
  },

});

module.exports = index;
