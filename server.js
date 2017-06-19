/* EXPRESS */
var express = require('express');
var app = express();
/* CREATION DU SERVER */
var server = require('http').createServer(app);
/* variable globales */
var port = 1337

/* ROAD TO ASSETS DIRECTORY */
app.use('/css', express.static(__dirname + '/assets/css'));
app.use('/js', express.static(__dirname + '/assets/js'));
app.use('/img', express.static(__dirname + '/assets/img'));
app.use('/fonts', express.static(__dirname + '/assets/fonts'));

/* road for start page */
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/fr/index.html');
});

app.get('/la_brasserie', function (req, res) {
    res.sendFile(__dirname + '/views/fr/story.html');
});

app.get('/la_carte', function (req, res) {
    res.sendFile(__dirname + '/views/fr/card.html');
});

app.get('/contact', function (req, res) {
    res.sendFile(__dirname + '/views/fr/contact.html');
});

app.get('/Lecaillerie', function (req, res) {
    res.sendFile(__dirname + '/views/fr/ecaillerie.html');
});

app.get('/Actualité', function (req, res) {
    res.sendFile(__dirname + '/views/fr/actu.html');
});
//app.post('/', function (req, res) {});

server.listen(port);
console.log("application live on port " + port);
