var nodemailer = require('nodemailer');
var settings = require("../settings");

exports.sendEmail = function (req, res) {
    var from = req.body.contactEmail;
    var subject = req.body.contactSubject;
    var textBody = '<a href="mailto:' + from + '">' + from + '</a> <br />'
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
            res.redirect('/contacts?modalMessage=' + 'error');
            // res.send(JSON.stringify({ status: "error", message: error }));
        } else {
            res.redirect('/contacts?modalMessage=' + 'success');
            // res.send(JSON.stringify({ status: "success", message: info.response }));
        };
    });    
}