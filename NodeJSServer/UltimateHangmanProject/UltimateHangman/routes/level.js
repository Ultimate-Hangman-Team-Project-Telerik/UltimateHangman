var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get("/getLevel", function (req, res) {
    res.send("get level");
});

router.post("/levelFinish", function (req, res) {
    res.send("level finish");
});

module.exports = router;