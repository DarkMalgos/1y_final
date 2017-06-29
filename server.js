/* EXPRESS */
var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
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

var connection = function () {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'mascotte_db'
    });
}

//connection for mac
/*var connection = function () {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'mascotte_db',
        socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
    });
}*/

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

/* road for start page */
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/fr/index.html');
});

app.get('/en', function (req, res) {
    res.sendFile(__dirname + '/views/fr/index.html');
});

app.get('/la_brasserie', function (req, res) {
    res.sendFile(__dirname + '/views/fr/story.html');
});

app.get('/en/la_brasserie', function (req, res) {
    res.sendFile(__dirname + '/views/fr/story.html');
});

app.get('/la_carte', function (req, res) {
    res.sendFile(__dirname + '/views/fr/card.html');
});

app.get('/en/la_carte', function (req, res) {
    res.sendFile(__dirname + '/views/fr/card.html');
});

app.get('/Lecaillerie', function (req, res) {
    res.sendFile(__dirname + '/views/fr/ecaillerie.html');
});

app.get('/en/Lecaillerie', function (req, res) {
    res.sendFile(__dirname + '/views/fr/ecaillerie.html');
});

app.get('/Actualité', function (req, res) {
    res.sendFile(__dirname + '/views/fr/actu.html');
});

app.get('/en/Actualité', function (req, res) {
    res.sendFile(__dirname + '/views/fr/actu.html');
});

app.get('/contact', function (req, res) {
    res.sendFile(__dirname + '/views/fr/contact.html');
});

app.post('/contact', function (req, res) {
    var q = "INSERT INTO reservation (firstname, lastname, jour, heure, nb_couvert) VALUES ('" + req.body.firstname + "', '" + req.body.lastname + "', '" + req.body.datepicker + "', '" + req.body.timepicker + "', " + req.body.number + ");",
        co = connection();
    co.connect();
    co.query(q, function (error, results, fields) {
        if (error) return console.log(error);
        res.sendFile(__dirname + '/views/fr/contact.html');
    });
    co.end();
});

app.get('/en/contact', function (req, res) {
    res.sendFile(__dirname + '/views/fr/contact.html');
});

//app.post('/', function (req, res) {});

server.listen(port);
console.log("application live on port " + port);
