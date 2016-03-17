const React = require('react');

const FaqCard = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
    body: React.PropTypes.string.isRequired,
  },
  render() {
    return (
      <div className="faq-card">
        <div className="card-title">{this.props.title}</div>
        <div className="card-body" dangerouslySetInnerHTML={{ __html: this.props.body }}>
        </div>
      </div>
    );
  },
});

module.exports = FaqCard;
