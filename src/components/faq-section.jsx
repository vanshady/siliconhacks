const React = require('react');
const FaqRow = require('./faq-row.jsx');
const cardData = require('../data.json');

const FaqSection = React.createClass({

  render() {
    const faqStyle = {
      backgroundColor: '#F8BF61',
      color: 'white',
    };

    const sectionBodyStyle = {
      maxWidth: '800px',
    };

    return (
      <div className="section" id="FAQ" style={faqStyle}>
        <div className="slant top left"></div>
        <div className="section-header">FAQ</div>
        <div className="section-body" style={sectionBodyStyle}>
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
