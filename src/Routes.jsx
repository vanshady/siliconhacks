
const React = require('react');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const routerHistory = ReactRouter.useRouterHistory;
const CreateHistory = require('history').createHashHistory;
const History = routerHistory(CreateHistory)({
  queryKey: false,
});

const Index = require('./components/index.jsx');

const Routes = (
    <Router history={History}>
      <Route path="/" component={Index}>
      </Route>
    </Router>
);

module.exports = Routes;
