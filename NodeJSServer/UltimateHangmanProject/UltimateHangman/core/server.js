var http = require('http');
var routes = require('../routes/index');
var user = require('../routes/users');

module.exports.createServer = function (app) {    
    app.get('/', routes.index);
    app.get('/users', user.users);
        
    http.createServer(app).listen(app.get('port'), function () {
        console.log('Express server listening on port ' + app.get('port'));
    });
}