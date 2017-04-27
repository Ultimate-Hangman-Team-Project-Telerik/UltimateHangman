var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get("getUserParameters", function (req, res) { 
    res.send("get user parameters");
});

router.get("getLeaderboardTable", function (req, res) { 
    res.send("get leaderboard table");
});

/* POST users listing. */
router.post("/login", function (req, res) {
    res.send("respond logIn");
});

router.post("/register", function (req, res) { 
    res.send("respond register");
});

module.exports = router;

//module.exports.users = function (req, res) {
//    res.send('respond with a resource');
//    res.end();
//}