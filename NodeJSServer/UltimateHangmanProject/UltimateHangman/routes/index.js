var express = require('express');
var router = express.Router();

// var fs = require("fs");

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Ultimate Hangman', people: [{ name: "Petar" }, { name: "Ivan" }] });
});

router.get('/login', function (req, res) {
    res.render('account/login', { title: 'Login' });
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