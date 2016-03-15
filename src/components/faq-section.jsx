const React = require('react');
var FaqRow = require('./faq-row.jsx');
var cardData = require('../faq.json');

const FaqSection = React.createClass({

  render() {
    // const sectionStyle = {
    //   backgroundColor: '#F8BF61',
    //   color: 'white'
    // };
    //
    // const sectionHeaderStyle = {
    //   fontSize: '20px',
    //   marginBottom: '40px',
    //   textAlign: 'center'
    // };
    //
    // const sectionBodyStyle = {
    //   maxWidth: '800px'
    // };
    //
    // const clearStyle = {
    //   clear: 'both'
    // };

    return (
      <div className="section" id="FAQ">
        <div className="slant top left"></div>
        <div className="section-header">FAQ</div>
        <div className="section-body">
          <FaqRow cards={cardData} row="1" />
          <FaqRow cards={cardData} row="2" />
          <div className="clear"></div>
        </div>
        <div className="slant bottom right"></div>
      </div>
    );
  }
});

module.exports = FaqSection;
