const React = require('react');
var FaqCard = require('./faq-card.jsx');

const FaqRow = React.createClass({

    render() {
        var cards = this.props.cards['faqrow' + this.props.row].map(function(obj){
            return (<FaqCard title={obj.title} body={obj.body} />);
        });

        return (
            <div className="faq-row">
                {cards}
            </div>
        );
    }
});

module.exports = FaqRow;
