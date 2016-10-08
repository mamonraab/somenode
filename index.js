// include the moudle
var express = require('express');
var app = express();
var port = 3000;
var wetheer = require('./app.js');
var out = "nothange ";
wetheer().then(
    function(data) {
        out = data;
    },
    function(error) {
        out = error;
    }
);

//midleware
var middleware = {
    requireAuthentication: function(req, res, next) {
        console.log('private area ');
        next();
    },
    loger: function(req, res, next) {
        console.log(req.method + '   ' + req.originalUrlm + '   ' + new Date().toString());
        next();
    }
};
// when we use app.use  that mean we use aaplication level middelware
//that work in all the app route
app.use(middleware.requireAuthentication);

/*
to use the  middelware only for spicific route

*/


app.get('/me', middleware.loger, function(req, res) {

    res.send(" <input type='text' name='mamon' value='axs' />   ");

});
app.get('/w', function(req, res) {
    res.send(out);

});
// starting the http
app.get('/', function(req, res) {
    res.send('hello mamon node js is here new love !!!!!');
});


// making another page
app.get('/about', function(req, res) {

    res.send(" <input type='text' name='mamon' value='axs' />   ");

});

// adding floder and its files to be brwse abel
//you can visit these typing localhost:3000/index.html
app.use(express.static(__dirname + '/www/v2'))


//port to listin in 

app.listen(port, function() {
    console.log('mamon express started in port ' + port + ' !!!');
});