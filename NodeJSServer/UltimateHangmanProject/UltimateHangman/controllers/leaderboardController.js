var request = require("request");
var settings = require("../settings");
//var requestQuery = require("../core/requestQuery");


exports.getLeaderboard = function (req, res) {
    //  var page = parseInt(req.query.page);
    // var size = settings.pagesize;
    // var requestOptions = requestQuery(req.url);
    //  var requestOptions = requestQuery.queryObject(req.url);
    
    var options = {
        method: 'GET',
        url: settings.url + '/accountUsers',
        // only username, lvl, points
        //    qs: {query: '{?query={}&fields=username,lvl,points&sort={"points": -1}}&limit=' + size + '&skip=' + size*page },
        qs: {
            query: '{}',
            fields: 'username,lvl,points',
            sort: '{"points": -1}}',
            limit: '10'
        },
        headers: settings.headers           
    };
    
    /* var allPagesOptions = {
            method: 'GET',
            url: settings.url + '/accountUsers/_count',
            headers: settings.headers
        } */
    
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        
        var requestResponse = JSON.parse(body);
        
        console.log(requestResponse);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(JSON.stringify({data: requestResponse}));
        res.end();
    });

    /* request(allPagesOptions, function (error, response, body) {
        if (error) throw new Error(error);
            
        console.log(body);
        res.write(body);
        res.end();
    }); */
};


