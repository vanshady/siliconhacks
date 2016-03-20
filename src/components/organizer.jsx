const React = require('react');

const Organizer = React.createClass({
  propTypes: {
    organizer: React.PropTypes.object.isRequired,
  },
  render() {
    const organizer = this.props.organizer;
    const imageURL = `assets/img/organizers/${organizer.image}`;
    return (
        <div className="col-xs-12 col-md-6 col-lg-4" style={{ marginTop: '20px' }}>
          <div className="row">
            <div className="col-xs-5">
              <img className="img-circle" src={imageURL} height="100" width="100" alt={organizer.name} />
            </div>
            <div className="col-xs-7">
                <p style={{ fontSize: '14px' }}>{organizer.name}</p>
                <p style={{ fontSize: '14px' }}>{organizer.college}</p>
                <p style={{ fontSize: '14px' }}><a className="btn btn-default" href={organizer.link} role="button">Read More &raquo;</a></p>
            </div>
          </div>
        </div>
    );
  },
});

module.exports = Organizer;
