var settings = require("../settings");

exports.setCookie = function (req, res) {
    res.cookie(settings.cookieName, "username=" + req.params.username, {
        expires: new Date(Date.now() + settings.cookieExpireTimeLength)
    });    
    res.redirect('/');
    //res.writeHead(200, { "Content-Type": "application/json" });
    //res.write(JSON.stringify({ status: "success" }));
    //res.end();
}

exports.getCookie = function (req, res) {
    var currentCookie = req.cookies[settings.cookieName];
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify({ cookie: currentCookie }));
    res.end();
}

exports.isUserLogged = function (req) {
    return req.cookies[settings.cookieName] !== undefined;
}

exports.getUsername = function (req) {
    return req.cookies[settings.cookieName] ?
        req.cookies[settings.cookieName].split("=")[1] : "";
}