const React = require('react');

const Organizer = React.createClass({
  propTypes: {
    image: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    college: React.PropTypes.string.isRequired,
    link: React.PropTypes.string.isRequired,
  },
  render() {
    const imageURL = `assets/img/organizers/${this.props.image}`;
    return (
        <div className="col-xs-12 col-md-6 col-lg-4" style={{ marginTop: '20px' }}>
          <div className="row">
            <div className="col-xs-5">
              <img className="img-circle" src={imageURL} height="100" width="100" alt={this.props.name} />
            </div>
            <div className="col-xs-7">
                <p style={{ fontSize: '14px' }}>{this.props.name}</p>
                <p style={{ fontSize: '14px' }}>{this.props.college}</p>
                <p style={{ fontSize: '14px' }}><a className="btn btn-default" href={this.props.link} role="button">Read More &raquo;</a></p>
            </div>
          </div>
        </div>
    );
  },
});

module.exports = Organizer;
