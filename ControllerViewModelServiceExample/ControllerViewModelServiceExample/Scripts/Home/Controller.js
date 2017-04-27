
var Controller = typeof Controller === "undefined" ? {} : Controller;
Controller.Home = (function() {
    var self = this,
        model = new ViewModel.Home(),
        id = Service.Home.homeTableId;

    return {
        init: init
    }

    function init() {
        model.loadTable(id)
            .done(function (resp) {
                alert(resp);
            });
    }
}());