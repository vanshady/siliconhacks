const React = require('react');
const organizersData = require('../organizers.json');
const organizers = organizersData.organizers;

const OrganizersSection = React.createClass({
  render() {
    const pStyle = {
      textAlign: 'center',
    };
    const rows = () => {
      let s = '';
      organizers.forEach((obj) => {
        s += `<b>${obj.name}</b>`;
        if (obj.email !== '') {
          s += ` : <a href="mailto:${obj.email}" target="_top">${obj.email}</a>`;
        }
        s += '<br />';
      });
      return s;
    };
    return (
      <div id="about" className="section">
        <div className="section-body">
          <h1>Organizers</h1>
          <p style={pStyle} dangerouslySetInnerHTML={{ __html: rows() }}>
          </p>
        </div>
      </div>
    );
  },
});

module.exports = OrganizersSection;
