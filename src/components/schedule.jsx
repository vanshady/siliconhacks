const React = require('react');
import { day1, day2 } from '../data.json';

const Schedule = () => (
    <div
      className="container table-responsive"
      style={{ width: '80%', maxWidth: '800px', margin: '0 auto', marginTop: '50px' }}
      id="schedule"
    >
      <h1>Saturday, May 6</h1>
      <table className="table" style={{ fontSize: '16px', marginTop: '10px' }}>
        <tbody>
          {
            day1.map((obj) => (
              <tr>
                <td style={{ whiteSpace: 'nowrap', width: '200px' }}>{obj.time}</td>
                <td>{obj.event}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <h1>Sunday, May 7</h1>
      <table className="table" style={{ fontSize: '16px', marginTop: '10px' }}>
        <tbody>
          {
            day2.map((obj) => (
              <tr>
                <td style={{ whiteSpace: 'nowrap', width: '200px' }}>{obj.time}</td>
                <td>{obj.event}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
);

module.exports = Schedule;
