/* EXPRESS */
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
const app = express();
/* CREATION DU SERVER */
const server = require('http').createServer(app);
/* variable globales */
var port = 1337;

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
    l_histoire
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

app.get('/L_histoire', function (req, res) {
    res.sendFile(__dirname + '/views/fr/story.html');
});

app.get('/en/L_histoire', function (req, res) {
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
    console.log('on form')
    res.sendFile(__dirname + '/views/fr/contact.html');
});

app.post('/contact', function (req, res) {
    let q = "INSERT INTO reservation (firstname, lastname, jour, heure, nb_couvert) VALUES ('" + req.body.firstname + "', '" + req.body.lastname + "', '" + req.body.datepicker + "', '" + req.body.timepicker + "', " + req.body.number + ");",
        co = connection();
    co.connect();
    co.query(q, function (error, results, fields) {
        if (error) return console.log(error);
        res.sendFile(__dirname + '/views/fr/contact.html');
    });
    co.end();

    let email = 'nom: ' + req.body.lastname + ' ' + req.body.firstname + ' date: ' + req.body.datepicker + ' heure: ' + req.body.timepicker + ' nombre: ' + req.body.number;

    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'reservation.mascotte@gmail.com',
            pass: 'totolola42'
        }
    });
    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Form on website" <reservation.mascotte@gmail.com>', // sender address
        to: 'reservation.mascotte@gmail.com', // list of receivers
        subject: 'Nouvelle réservation', // Subject line
        text: email // plain text body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function (error, info) {
        console.log('degage');
        if (error) return console.log(error);

        console.log('Message sent: ' + info.response);
    });
});

app.get('/en/contact', function (req, res) {
    res.sendFile(__dirname + '/views/fr/contact.html');
});

server.listen(port);
console.log("application live on port " + port);
