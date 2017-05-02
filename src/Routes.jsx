
const React = require('react');

import {
  BrowserRouter as Router,
  Route,
  // Link
} from 'react-router-dom';

const Index = require('./components/index.jsx');
const Live = require('./components/live.jsx');
const HeadSection = require('./components/head-section.jsx');
const Nav = require('./components/nav.jsx');
const FooterSection = require('./components/footer-section.jsx');

const Routes = (
    <Router>
      <div id="overflow-wrapper">
        <Nav />
        <HeadSection />
        <Route exact path="/" component={Index} />
        <Route path="/live" component={Live} />
        <FooterSection />
      </div>
    </Router>
);

module.exports = Routes;
