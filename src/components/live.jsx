const React = require('react');
const ApplySection = require('./apply-section.jsx');
const AboutSection = require('./about-section.jsx');
const FaqSection = require('./faq-section.jsx');
const FooterSection = require('./footer-section.jsx');
// const GeneralSection = require('./general-section.jsx');
const HeadSection = require('./head-section.jsx');
const Nav = require('./nav.jsx');
const SponsorSection = require('./sponsor-section.jsx');
const OrganizersSection = require('./organizers-section.jsx');

const Live = React.createClass({
  render() {
    return (
      <div>
        {/* <AboutSection />
        <FaqSection />
        <SponsorSection />
        <ApplySection /> */}
        <OrganizersSection />
      </div>
    );
  },

});

module.exports = Live;
