const React = require('react');

const ApplySection = React.createClass({
  render() {
    // const applyStyle = {
    //   height: '600px',
    //   backgroundColor: '#6FCBDC',
    // };
    // const applyContainerStyle = {
    //   width: '100%',
    //   maxWidth: '400px',
    //   textAlign: 'center',
    //   margin: '0 auto',
    //   marginYop: '150px',
    //   position: 'relative',
    // };
    // const applyHeaderStyle = {
    //   color: 'white',
    //   fontSize: '28px',
    //   lineHeight: '1.5',
    //   textAlign: 'center',
    //   marginBottom: '15px',
    // };
    // const buttonApplyStyle = {
    //   padding: '12px 25px',
    //   textAlign: 'center',
    //   fontSize: '24px',
    // };
    return (
      <div id="apply" className="section">
        <div className="desktop-img"></div>
        <div className="apply-container">
          <div className="apply-header">Join the maling list</div>
          <a className="button apply" href="https://siliconhacks.typeform.com/to/wK5Mls" target="_blank">Apply</a>
        </div>
      </div>
    );
  },
});

module.exports = ApplySection;
