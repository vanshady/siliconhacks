const React = require('react');
import PropTypes from 'prop-types';
const FaqCard = require('./faq-card.jsx');
let key = 0;

class FaqRow extends React.Component {
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
  }
}

FaqRow.propTypes = {
  cards: PropTypes.array.isRequired,
};

module.exports = FaqRow;
