const React = require('react');

const Organizer = React.createClass({
  propTypes: {
    organizer: React.PropTypes.object.isRequired,
  },
  render() {
    const organizer = this.props.organizer;
    const imageURL = `assets/img/organizers/${organizer.image}`;
    const schoolStyle = {
      textDecoration: 'none',
      color: 'inherit',
      transition: '0.3s ease',
      fontFamily: 'Proxima Nova, Montserrat, sans-serif',
      textAlign: 'center',
      fontSize: '16px',
    };
    return (
        <div className="col-xs-12 col-md-6 col-lg-4" style={{ marginTop: '30px' }}>
          <div className="row">
            <div className="col-xs-4">
              <img className="img-circle" src={imageURL} height="100" width="100" alt={organizer.name} />
            </div>
            <div className="col-xs-8">
                 <a href={organizer.link} target="_blank" style={{ fontSize: '18px', marginBottom: '20px' }}>{organizer.name}</a><br />
                 <p style={schoolStyle}>{organizer.school}</p>
            </div>
          </div>
        </div>
    );
  },
});

module.exports = Organizer;
