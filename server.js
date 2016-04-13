var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var compression = require('compression')

// const port = process.env.VCAP_APP_PORT || 3000;
const port = process.env.PORT || 3000;
//app.use(express.compress({threshold: 0}));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//301 Redirect
var http = require("http");

    http.createServer(function (req, res) {
    res.writeHead(301, {"Location": "http://siliconhacks.com"});
    res.end();

}).listen(80);



//404 Error
app.use(function(req, res, next) {
  res.status(404).sendFile(__dirname + '/public/error.html');
});

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(port);
console.log('listening at:', port);

