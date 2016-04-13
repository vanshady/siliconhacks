const express = require('express');
const app = express();
var bodyParser = require('body-parser');

// const port = process.env.VCAP_APP_PORT || 3000;
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
  res.status(404).sendFile(__dirname + '/public/error.html');
});

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(port);
console.log('listening at:', port);
