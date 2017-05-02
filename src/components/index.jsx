const React = require('react');
const ApplySection = require('./apply-section.jsx');
const AboutSection = require('./about-section.jsx');
const FaqSection = require('./faq-section.jsx');
// const GeneralSection = require('./general-section.jsx');
const SponsorSection = require('./sponsor-section.jsx');
const OrganizersSection = require('./organizers-section.jsx');

const index = () => (
    <div>
      <AboutSection />
      <FaqSection />
      {/* <GeneralSection /> */}
      <SponsorSection />
      <ApplySection />
      <OrganizersSection />
    </div>
  );

module.exports = index;
