const React = require('react');

const FooterSection = () => (
  <div className="section" id="footer">
    <a href="https://www.facebook.com/SiliconHacks-1599535033704053/?fref=ts" target="_blank" className="social">
      <img src="assets/img/facebook.svg" alt="Facebook" />
    </a>
    <a href="https://twitter.com/SiliconHacks" target="_blank" className="social">
      <img src="assets/img/twitter.svg" alt="Twitter" />
    </a>
    <a href="mailto:hacksilicon@gmail.com" target="_blank" className="social">
      <img src="assets/img/mail.svg" alt="Email" />
    </a>
    <a href="https://www.instagram.com/siliconhacks/" target="_blank" className="social instagram">
      <img src="assets/img/instagram.svg" alt="Instagram" />
    </a>
    <p style={{ marginTop: '10px' }}>
      Site inspired by CalHacks and designed and developed by the SiliconHacks team. Contact us at
      <a href="mailto:hacksilicon@gmail.com">hacksilicon@gmail.com</a>
      <br />
      SiliconHacks is a project of Hacker Fund, a 501(c)(3) nonprofit incubator registered in CA, with the tax ID number: 472485464
    </p>
  </div>
);

module.exports = FooterSection;
