const React = require('react');
const Organizer = require('./organizer.jsx');
const organizersData = require('../organizers.json');
const organizers = organizersData.organizers;

const OrganizersSection = React.createClass({
  render() {
    let i = -1;
    const rows = organizers.map((obj) => {
      i++;
      return (<Organizer key={i} name={obj.name} image={obj.image} college={obj.college} link={obj.link} />);
    });
    return (
      <div id="about" className="section container" style={{ maxWidth: 'none' }}>
        <div className="section-body row" style={{ maxWidth: 'none', width: '80%' }}>
          <h1>Organizers</h1>
          {rows}
        </div>
      </div>
    );
  },
});

module.exports = OrganizersSection;
