/* Purpose of SERVER.JS file:
* - configure application
* - connect to database
* - create mongoose model
* - define routes for RESTful API
* - define routes for frontend Angular Application
* - set app to listen on a port (run the server)
* */

// SERVER.JS

// SETUP ================
var express = require('express');
var app = express();                                //create app using express
var mongoose = require('mongoose');                 //mongoose for mongoDb
var morgan = require('morgan');                     //logger
var bodyParser = require('body-parser');            //parses HTML POSTs
var methodOvveride = require('method-override');    //simulate DELETE and PUT (?)
var colors = require('colors');

// CONFIG ================
mongoose.connect('mongodb://node:nodeuser@mongo.onmodulus.net:27017/uw03mypu'); //connect to db instance

app.use(express.static(__dirname + '/public')); //set static file location to be under '/public'.
//for instance: '/public/img' folder will be '/img'.

app.use(morgan('dev'));                     // log every request to console
app.use(bodyParser.urlencoded({
    'extended':'true'
}));                                        //parse applications/x-www-form-urlencode (?)
app.use(bodyParser.json());                 //parse application/json
app.use(bodyParser.json({
    type:'application/vnd.api+json'
}));                                        //parse application/vnd.api+json as json
app.use(methodOvveride());

app.listen(8080);
console.log("App listening on port: " + colors.green("8080"));

