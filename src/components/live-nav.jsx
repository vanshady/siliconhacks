const React = require('react');

const mlhBadgeStyle = {
  width: '100%',
  height: '100%',
  maxHeight: '135px',
};

const LiveNav = () => (
      <nav id="nav">
        <a
          id="mlh-trust-badge"
          href="https://mlh.io/seasons/na-2017/events?utm_source=na-2017&utm_medium=TrustBadge&utm_campaign=na-2017&utm_content=white"
          target="_blank"
        >
          <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg" alt="Major League Hacking 2017 Hackathon Season" style={ mlhBadgeStyle } />
        </a>

        <img id="logo_white" className="logo" src="assets/img/logo_white.png" alt="SiliconHacks" />
        <img id="logo_green" className="logo" src="assets/img/logo_green.png" alt="SiliconHacks" />
        <img id="menu_white" className="nav-menu" src="assets/img/menu_white.svg" alt="" />
        <img id="menu_green" className="nav-menu" src="assets/img/menu_green.svg" alt="" />

        <div id="nav-sections">
          <div id="nav-close" className="nav-section">x</div>
          <div className="nav-section">
            <a href="/">Home</a>
          </div>
          <div className="nav-section active">
            <a href="#landing">Live</a>
          </div>
          <div className="nav-section">
            <a href="#schedule">Schedule</a>
          </div>
          <div className="nav-section">
            <a href="#prizes">Prizes</a>
          </div>
          {/* <div className="nav-section">
            <a href="#hardware">Hardware</a>
          </div> */}
          <div className="nav-section">
            <a href="#api">APIs</a>
          </div>
        </div>
      </nav>
    );

module.exports = LiveNav;
