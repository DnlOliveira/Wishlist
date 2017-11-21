var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var routes = require('./controllers/mainController');
app.use('/', routes);

var PORT = 3000;


var connectionString = 'mongodb://localhost/wishlist';
mongoose.connect(connectionString)
    .then( function() {
        app.listen(PORT, function() {
            console.log("Listening on Port " + PORT);
        });
    });

var db = mongoose.connection;
db.on('error', function(err) {
    console.log("Mongoose Error: " + err);
});
db.once('open', function() {
    console.log("Mongoose Connection Successful");
})