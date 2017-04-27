var express = require('express');
var router = express.Router();

/* POST contact listing. */
router.post("/contactEmail", function (req, res) {
    res.send("contat email");
});

module.exports = router;