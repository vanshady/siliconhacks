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
    const faqRowStyle = {
      width: '50%',
      float: 'left',
      minWidth: '300px',
      padding: '0px 10px',
    };
    return (
      <div className="faq-row" style={faqRowStyle} >
        {cards}
      </div>
    );
  },
});

module.exports = FaqRow;
