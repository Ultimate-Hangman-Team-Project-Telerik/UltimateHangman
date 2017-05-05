var request = require("request");
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

exports.register = function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    var repeatPassword = req.body.repeatPassword;
    var fullname = req.body.fullname;
    var email = req.body.email;
    
    if (password != repeatPassword) {        
        res.writeHead(500, "Internal Error Occured", { "Content-Type": "application/json" });
        res.write(JSON.stringify({ status: "error", message: "Error: Password must equal with repeat password!" }));
        res.end();
        return;
    }    

    var options = {
        method: 'GET',
        url: settings.url + '/accountUsers/_count',
        qs: { query: '{"username": "' + username + '"}' },
        headers: settings.headers
    };    
    
    request(options, function (error, response, responseData) {
        if (error) throw new Error(error);
        
        if (JSON.parse(responseData)["count"] == 0) {
            options.method = "POST";
            options.url = settings.url + "/accountUsers";
            options.formData = {
                username: username,
                password: password,
                fullname: fullname,
                email: email,
                lvl: "0",
                points: "0"
            };
            request(options, function (postError, postResponse, postData) {
                if (postError) throw new Error(postError);
                
                res.writeHead(200, { "Content-Type": "application/json" });
                res.write(JSON.stringify({ status: "success", message: "User created successfully!" }));
                res.end();
            });
        } else {
            res.writeHead(500, "Internal Error Occured", { "Content-Type": "application/json" });
            res.write(JSON.stringify({ status: "error", message: "Error: User currently exists!" }));
            res.end();
        }
    });
}
