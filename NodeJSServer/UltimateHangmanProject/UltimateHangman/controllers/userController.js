var request = require("request");
var settings = require("../settings");
var cookie = require("../core/cookie");

exports.login = function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    
    var options = {
        method: 'GET',
        url: settings.url + '/accountUsers/_count',
        qs: { query: '{"$and": [{"username": "' + username + '", "password": "' + password + '"}]}' },
        headers: settings.headers,
        formData: {
            id: '1',
            author: 'Test',
            subject_title: 'Title',
            subject_body: 'Body'
        }
    };
    
    request(options, function (error, response, responseData) {
        if (error) throw new Error(error);
        console.log(responseData);
        
        if (JSON.parse(responseData)["count"] == 1) {
            req.params.username = username;
            cookie.setCookie(req, res);
        } else {
            res.writeHead(500, "Internal Error Occured", { "Content-Type": "application/json" });
            res.write(JSON.stringify({ status: "error", message: "Error: Login information is not correct!" }));
            res.end();
        }
    });
}

exports.register = function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    var repeatPassword = req.body.repeatPassword;
    var fullname = req.body.fullname;
    var email = req.body.email;
    
    if (!username || username.length == 0 ||
            !password || password.length == 0 ||
            !repeatPassword || repeatPassword.length == 0) {
        res.redirect('/register?modalMessage=' + 'Error! You haven`t filled all required fields! Please try again!');
        return;
    }
    
    
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
                
                exports.login(req, res);
                //res.writeHead(200, { "Content-Type": "application/json" });
                //res.write(JSON.stringify({ status: "success", message: "User created successfully!" }));
                //res.end();
            });
        } else {
            res.writeHead(500, "Internal Error Occured", { "Content-Type": "application/json" });
            res.write(JSON.stringify({ status: "error", message: "Error: User currently exists!" }));
            res.end();
        }
    });
}

exports.logout = function (req, res) {
    //res.clearCookie(settings.cookieName);
    res.cookie(settings.cookieName, "", {
        expires: new Date(Date.now() - 1)
    });
    res.redirect('/');
}
