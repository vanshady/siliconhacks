const React = require('react');
const scheduleData = require('../schedule.json');
const schedule = scheduleData.schedule;

const Schedules = React.createClass({
  render() {
    const rows = () => {
      let s = '';
      for (let i = 0; i < schedule.length; i++) {
        s += `<b>${schedule[i].event}</b>${schedule[i].time}<br />`;
      }
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
