const React = require('react');
const scheduleData = require('../schedule.json');
const schedule = scheduleData.schedule;

const Schedules = React.createClass({
  render() {
    const rows = () => {
      let s = '';
      schedule.forEach((obj) => {
        s += `<b>${obj.event}</b>${obj.time}<br />`;
      });
      return s;
    };
    const pStyle = {
      textAlign: 'center',
    };
    return (
        <p style={pStyle} dangerouslySetInnerHTML={{ __html: rows() }}>
        </p>
    );
  },
});

module.exports = Schedules;
