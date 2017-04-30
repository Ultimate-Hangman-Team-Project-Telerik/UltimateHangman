﻿var request = require("request");
var settings = require("../settings");

exports.login = function (req, res) {
    var username = req.body.username;
    var password = req.body.password;

    var options = {
        method: 'GET',
        url: settings.url + '/accountUsers',
        qs: { query: '{"$and": [{"username": "' + username + '", "password": "' + password + '"}]}' },
        headers: settings.headers,
        formData: {
            id: '1',
            author: 'Test',
            subject_title: 'Title',
            subject_body: 'Body'
        }
    };
    
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        
        console.log(body);
        res.write(body);
        res.end();
    });
}
