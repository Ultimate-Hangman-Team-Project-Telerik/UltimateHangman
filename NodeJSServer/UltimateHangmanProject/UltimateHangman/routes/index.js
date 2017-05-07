var express = require('express');
var router = express.Router();
var cookie = require("../core/cookie");

// var fs = require("fs");

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Home'});
});

router.get('/#home', function (req, res) { 
    res.render('index', { title: 'Welcome to Ultimate Hangman' });
});

/* GET login page */
router.get('/login', function (req, res) {
    res.render('index', { title: 'Login' });
});

/* GET register page */
router.get('/#register', function (req, res) { 
    res.render('index', { title: 'Register' });
});

/* GET contacts page */

router.get('/#contacts', function (req, res) { 
    res.render('index', { title: 'Contacts' });
});

/* GET play page */

router.get('/#play', function (req, res) { 
    res.render('index', { title: 'Play' });
});

/* GET leaderboard page */
router.get('/#leaderboard', function (req, res) { 
    res.render('index', { title: 'Leaderboard' });
});


/* Cookies test queries */
router.get("/cookieSet/:username", function (req, res) { 
    cookie.setCookie(req, res);
});
router.get("/cookieGet", function (req, res) { 
    cookie.getCookie(req, res);
});


module.exports = router;

//exports.index = function (req, res) {
//    console.log("Test");
//    res.render('index', { title: 'Ultimate Hangman', people: [{ name: "Petar" }, { name: "Ivan" }] });
//    //res.render('index', { title: 'Home' });
//    //res.writeHead(200, { "Content-Type": "text/html" });
//    //res.write(fs.readFileSync("./views/index.html").toString());
//    res.end();
//};
