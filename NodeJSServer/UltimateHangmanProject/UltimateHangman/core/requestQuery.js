
exports.queryObject = function (query) {
    var queryArray = query.split("?"),
        queryArray = queryArray.length == 1 ? 
            queryArray[0].split(";") : 
            queryArray[1].split(";"),
        queryObject = {},
        queryProp,
        prop,
        value;
    
    for (queryProp in queryArray) {
        prop = queryArray[queryProp].split("=")[0];
        value = queryArray[queryProp].split("=")[1];
        queryObject[prop] = value;
    };
    
    return queryObject;
}