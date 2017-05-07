var express = require('express');
var contactsController = require('../controllers/contactsController');
var router = express.Router();

/* POST contact listing. */
router.post("/sendEmail", function (req, res) {
    contactsController.sendEmail(req, res);
});

module.exports = router;