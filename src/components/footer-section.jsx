const React = require('react');

const FooterSection = React.createClass({
  render() {
    const footerSectionStyle = {
      backgroundColor: '#3E3E3E',
      color: 'white',
      textAlign: 'center',
      padding: '20px 20px',
      fontFamily: 'Proxima Nova, Open Sans, sans-serif',
    };
    return (
      <div className="section" id="footer" style={footerSectionStyle}>
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
      </div>
    );
  },
});

module.exports = FooterSection;
