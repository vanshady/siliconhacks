
const React = require('react');

import {
  BrowserRouter as Router,
  Route,
  // Link
} from 'react-router-dom';

const Index = require('./components/index.jsx');

const Routes = (
    <Router>
      <div>
        <Route exact path="/" component={Index} />
        <Route path="/live" component={Index} />
      </div>
    </Router>
);

module.exports = Routes;
