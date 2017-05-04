import React from 'react';
import LiveNav from './live-nav.jsx';
import LiveHeadSection from './live-head-section.jsx';
import PrizeSection from './prize-section.jsx';
import HardwareSection from './hardware-section.jsx';
import Schedule from './schedule.jsx';
import API from './api.jsx';

const Live = () => (
    <div>
      <LiveNav />
      <LiveHeadSection />
      <Schedule />
      <PrizeSection />
      <HardwareSection />
      <API />
    </div>
  );

module.exports = Live;
