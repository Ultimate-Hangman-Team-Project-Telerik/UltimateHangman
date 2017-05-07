var nodemailer = require('nodemailer');
var settings = require("../settings");

exports.sendEmail = function (req, res) {
    var from = req.body.contactEmail;
    var subject = req.body.contactSubject;
    var textBody = from + " <br />"
    textBody += req.body.contactMessage;

    var transporter = nodemailer.createTransport(settings.nodemailerTransporter);
    
    var mailOptions = {
        from: settings.gmailAccount,
        to: settings.gmailAccount,
        subject: subject,
        html: textBody
    };
    
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            res.send(JSON.stringify({ status: "error", message: error }));
        } else {
            res.send(JSON.stringify({ status: "success", message: info.response }));
        };
    });    
}