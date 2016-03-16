const React = require('react');
const FaqCard = require('./faq-card.jsx');

const FaqRow = React.createClass({

  render() {
    const cards = this.props.cards['faqrow' + this.props.row].map(function(obj){
      return (<FaqCard title={obj.title} body={obj.body} />);
    });

    return (
      <div className="faq-row">
        {cards}
      </div>
    );
  },
});

module.exports = FaqRow;
