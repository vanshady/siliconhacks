var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var compression = require('compression')
var http = require("http");

// const port = process.env.VCAP_APP_PORT || 3000;
const port = process.env.PORT || 3000;

app.use(function forceLiveDomain(req, res, next) {
  // Don't allow user to hit Heroku now that we have a domain
  var host = req.get('Host');
  if (host === 'http://www.siliconhacks.com') {
    return res.redirect(301, 'http://siliconhacks.com/' + req.originalUrl);
  }
  return next();
});

app.use(compression({threshold: 0}));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//404 Error
app.use(function(req, res, next) {
  res.status(404).sendFile(__dirname + '/public/error.html');
});

app.get('/', function (req, res) {
  res.render('index');
});

//301 Redirect
    

app.listen(port);
console.log('listening at:', port);

