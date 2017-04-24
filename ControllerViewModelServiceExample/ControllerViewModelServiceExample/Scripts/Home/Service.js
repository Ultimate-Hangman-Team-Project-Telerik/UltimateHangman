
var Service = Service ? Service : {};
Service.Home = (function () {
    function loadTableData() {
        // return $.ajax({
        //     type: "GET",
        //     url: "...",
        //     data: null,
        //     dataType: "json"
        // });

        return {
            data: [{
                Name: "Pesho",
                Age: 15
            }, {
                Name: "Ivan",
                Age: 13
            }]
        };
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
    }

    return {
        loadTableData: loadTableData,
        loadTableSettings: loadTableSettings
    }
}());