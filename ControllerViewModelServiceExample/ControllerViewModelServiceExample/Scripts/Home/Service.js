
var Service = typeof Service === "undefined" ? {} : Service;
Service.Home = (function () {
    var homeTableId = "currentTable";

    function loadTableData() {
        // return $.ajax({
        //     type: "GET",
        //     url: "...",
        //     data: null,
        //     dataType: "json"
        // });
        var dfd = $.Deferred();
        var currentResult = {
            data: [{
                Name: "Pesho",
                Age: 15
            }, {
                Name: "Ivan",
                Age: 13
            }]
        };

        dfd.resolve(currentResult);
        return dfd;
    }

    function loadTableSettings() {
        var dfd = $.Deferred();
        var settings = {
            sort: false,
            dom: "fti",
            columns: [{
                data: "Name",
                title: "Name"
            }, {
                data: "Age",
                title: "Age"
            }],
            info: true,
            paging: true
        };

        dfd.resolve(settings);
        return dfd;
          console.log(dfd)

    }

    return {
        loadTableData: loadTableData,
        loadTableSettings: loadTableSettings,
        homeTableId: homeTableId
    }
}());