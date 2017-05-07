var express = require('express');
var router = express.Router();
var cookie = require("../core/cookie");

// var fs = require("fs");

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', {
        title: 'Home',
        isLogged: cookie.isUserLogged(req), 
        username: cookie.getUsername(req)
    });
});

router.get('/home', function (req, res) {
    res.render('index', {
        title: 'Home',
        isLogged: cookie.isUserLogged(req), 
        username: cookie.getUsername(req)
    });
});

/* GET login page */
router.get('/login', function (req, res) {
    res.render('index', {
        title: !cookie.isUserLogged(req) ? 
            'Login' : 'Error',
        isLogged: cookie.isUserLogged(req), 
        username: cookie.getUsername(req)
    });
});

/* GET register page */
router.get('/register', function (req, res) {
    res.render('index', {
        title: !cookie.isUserLogged(req) ? 
            'Register' : 'Error',
        isLogged: cookie.isUserLogged(req), 
        username: cookie.getUsername(req)
    });
});

/* GET contacts page */
router.get('/contacts', function (req, res) {
    res.render('index', {
        title: 'Contacts',
        isLogged: cookie.isUserLogged(req), 
        username: cookie.getUsername(req)
    });
});

/* GET play page */

router.get('/play', function (req, res) {
    var isUserLogged = cookie.isUserLogged(req);
    var currentTitle = isUserLogged ? 'Play' : 'Login'
    res.render('index', {
        title: currentTitle, 
        isLogged: cookie.isUserLogged(req), 
        username: cookie.getUsername(req)
    });
});

/* GET leaderboard page */
router.get('/leaderboard', function (req, res) {
    console.log(cookie.isUserLogged(req));
    console.log(cookie.getUsername(req));
    res.render('index', {
        title: 'Leaderboard', 
        isLogged: cookie.isUserLogged(req), 
        username: cookie.getUsername(req)
    });
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
