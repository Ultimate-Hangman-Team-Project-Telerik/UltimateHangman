var request = require("request");
var settings = require("../settings");
var cookie = require("../core/cookie");
var requestQuery = require("../core/requestQuery");

exports.getWord = function (req, res) {
    var requestOptions = requestQuery.queryObject(req.url);
    var wordPackageValue = requestOptions["wordPackageValue"];
    var lvlValue = requestOptions["lvlValue"];
    
    var options = {
        method: 'GET',
        url: settings.url + '/wordsCollection',
        qs: {
            query: '{"$and": [{"currentWordPackage":"' + wordPackageValue + '", "currentLvl": "' + lvlValue + '"}]}',
            fields: 'currentWord'
        },
        headers: settings.headers
    };
    
    request(options, function (error, response, requestResponse) {
        if (error) throw new Error(error);
        
        requestResponse = JSON.parse(requestResponse);
        var selectedWord = requestResponse[Math.floor(Math.random() * requestResponse.length)];
        
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(JSON.stringify({ status: "success", data: selectedWord }));
        res.end();
    });
}

exports.checkWord = function (req, res) {
    var status = req.body.status;
    
    if (status === "success") {
        var options = {
            method: 'GET',
            url: settings.url + '/accountUsers',
            qs: {
                query: '{"username":"' + cookie.getUsername(req) + '"}'
            },
            headers: settings.headers
        };
        
        request(options, function (error, response, requestResponse) {
            if (error) throw new Error(error);
            requestResponse = JSON.parse(requestResponse);
            var currentId = requestResponse[0]["_id"];
            var currentUsername = requestResponse[0]["username"];
            var currentPassword = requestResponse[0]["password"];
            var currentFullname = requestResponse[0]["fullname"];
            var currentEmail = requestResponse[0]["email"];
            var currentPoints = parseInt(requestResponse[0]["points"]);
            var currentLvl = parseInt(requestResponse[0]["lvl"]);
            
            currentPoints += eval(settings.levelExperience.replace("l", currentLvl));
            
            if (currentPoints > 95) {
                currentLvl += 1;
                currentPoints = 0;
            }
            
            // Update statement
            var updateOptions = {
                method: 'PUT',
                url: settings.url + '/accountUsers/' + currentId,
                headers: settings.headers,
                formData: {
                    username: currentUsername,
                    password: currentPassword,
                    fullname: currentFullname,
                    email: currentEmail,
                    lvl: currentLvl,
                    points: currentPoints
                }
            };
            
            request(options, function (error, response, body) {
                if (error) throw new Error(error);
                
                res.writeHead(200, { "Content-Type": "application/json" });
                res.write(JSON.stringify({ status: "success" }));
                res.end();
            });            
        });
    } else {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(JSON.stringify({ status: "fail" }));
        res.end();
    }
}
