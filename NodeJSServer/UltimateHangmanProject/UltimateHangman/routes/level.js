var express = require('express');
var wordController = require("../controllers/wordController");
var router = express.Router();

/* GET users listing. */
router.get("/getLevel", function (req, res) {
    wordController.getWord(req, res);
});

router.post("/levelFinish", function (req, res) {
    wordController.checkWord(req, res);
});

module.exports = router;