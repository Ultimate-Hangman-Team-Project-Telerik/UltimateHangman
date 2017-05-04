﻿var express = require('express');
var userController = require('../controllers/userController');
var router = express.Router();

/* GET users listing. */
router.get("/getUserParameters", function (req, res) { 
    res.send("get user parameters");
});

router.get("/getLeaderboardTable", function (req, res) { 
    res.send("get leaderboard table");
});

/* POST users listing. */
router.post("/userLogin", function (req, res) {
    userController.login(req, res);
});

router.post("/register", function (req, res) { 
    res.send("respond register");
});

router.post("/userRegistration", function (req, res) {
    userController.register(req, res);

});

module.exports = router;

//module.exports.users = function (req, res) {
//    res.send('respond with a resource');
//    res.end();
//}
