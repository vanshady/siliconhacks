const React = require('react');

const Nav = React.createClass({
  render() {
    return (
      <nav id="nav">
        <img id="logo_white" className="logo" src="assets/img/logo_white.png" alt="SiliconHacks" />
        <img id="logo_green" className="logo" src="assets/img/logo_green.png" alt="SiliconHacks" />
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
    );
  },
});

module.exports = Nav;
