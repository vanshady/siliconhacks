const React = require('react');
const FaqRow = require('./faq-row.jsx');
const cardData = require('../data.json');

const FaqSection = React.createClass({
  render() {
    return (
      <div className="section" id="FAQ">
        <div className="slant top left"></div>
        <div className="section-header">FAQ</div>
        <div className="section-body">
          <FaqRow cards={cardData.faqrow1} row="1" />
          <FaqRow cards={cardData.faqrow2} row="2" />
          <div className="clear"></div>
        </div>
        <div className="slant bottom right"></div>
      </div>
    );
  },
});

module.exports = FaqSection;
