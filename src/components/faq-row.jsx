const React = require('react');
const FaqCard = require('./faq-card.jsx');
let key = 0;

const FaqRow = React.createClass({

  render() {
    const cards = this.props.cards['faqrow' + this.props.row].map(function(obj){
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
