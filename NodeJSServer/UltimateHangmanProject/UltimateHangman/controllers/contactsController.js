var nodemailer = require('nodemailer');
var settings = require("../settings");

exports.sendEmail = function (req, res) {
    var from = req.body.contactEmail;
    var subject = req.body.contactSubject;
    var textBody = '<a href="mailto:' + from + '">' + from + '</a> <br />'
    textBody += req.body.contactMessage;
    
    if (!from || from.length == 0 ||
            !subject || subject.length == 0 ||
            !req.body.contactMessage || req.body.contactMessage.length == 0) {
        res.redirect('/contacts?modalMessage=' + 'Error! You haven`t filled all required fields! Please try again!');
        return;
    }

    var transporter = nodemailer.createTransport(settings.nodemailerTransporter);
    
    var mailOptions = {
        from: settings.gmailAccount,
        to: settings.gmailAccount,
        subject: subject,
        html: textBody
    };
    
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            res.redirect('/contacts?modalMessage=' + 'Error! Message is not sent! Try again');
            // res.send(JSON.stringify({ status: "error", message: error }));
        } else {
            res.redirect('/contacts?modalMessage=' + 'Success! Messsage is sent successful!');
            // res.send(JSON.stringify({ status: "success", message: info.response }));
        };
    });    
}