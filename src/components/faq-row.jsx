const React = require('react');
const FaqCard = require('./faq-card.jsx');
let key = 0;

const FaqRow = React.createClass({
  propTypes: {
    cards: React.PropTypes.array.isRequired,
  },
  render() {
    const cards = this.props.cards.map((obj) => {
      key++;
      return (<FaqCard key={key} title={obj.title} body={obj.body} />);
    });

    return (
      <div className="faq-row">
        {cards}
      </div>
    );
  },
});

module.exports = FaqRow;
