
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
// const News = require('./components/News.jsx');
// const Photos = require('./components/Photos.jsx');

const Routes = (
    <Router history={History}>
        <Route path="/" component={Index}>
            {/* <Route path="/news" component={News} />
            <Route path="/photos" component={Photos} />*/}
        </Route>
    </Router>
);

module.exports = Routes;
