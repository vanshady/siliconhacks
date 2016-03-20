const React = require('react');

const FooterSection = React.createClass({
  render() {
    return (
      <div className="section" id="footer">
        <a href="https://www.facebook.com/CalHacks" target="_blank" className="social">
          <img src="assets/img/facebook.svg" alt="Facebook" />
        </a>
        <a href="https://twitter.com/calhacks" target="_blank" className="social">
          <img src="assets/img/twitter.svg" alt="Twitter" />
        </a>
        <a href="mailto:hacksilicon@gmail.com" target="_blank" className="social">
          <img src="assets/img/mail.svg" alt="Email" />
        </a>
        <a href="https://instagram.com/calhacks" target="_blank" className="social instagram">
          <img src="assets/img/instagram.svg" alt="Instagram" />
        </a>
        <p>Made with &hearts; by the SiliconHacks team! Contact us at
          <a href="mailto:hacksilicon@gmail.com">hacksilicon@gmail.com</a>
        </p>
        <p className="credit">Credit:
          <a href="http://www.freepik.com/">freepik</a>
          for the desktop illustration
        </p>
      </div>
    );
  },
});

module.exports = FooterSection;
