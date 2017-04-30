var request = require("request");
var settings = require("../settings");

exports.getWord = function (req, res) {
    var options = req.url.split("?")[1].split("&");
    var wordPackageValue = options[0].split("=")[1];
    var lvlValue = options[1].split("=")[1];    
    
    var options = {
        method: 'GET',
        url: settings.url + '/wordsCollection',
        qs: { query: '{"$and": [{"currentWordPackage":"' + wordPackageValue + '", "currentLvl": "' + lvlValue + '"}]}' },
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
