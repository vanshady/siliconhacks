const React = require('react');
import { hardware } from '../data.json';
const HardwareSection = () => (
      <div id="hardware" className="section" style={{ paddingBottom: '20px' }}>
        <div className="section-wrapper">
          <div className="section-body">
            <h1>
              Hardware
            </h1>
            <br />
            <div
              className="container table-responsive"
              style={{ width: '80%', maxWidth: '500px', margin: '0 auto' }}
            >
              <table className="table" style={{ fontSize: '16px', marginTop: '10px' }}>
                <tbody>
                  {
                    hardware.map((obj) => (
                      <tr key={obj.item}>
                        <td style={{ whiteSpace: 'nowrap' }}>{obj.number}</td>
                        <td>{obj.item}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>);

module.exports = HardwareSection;
