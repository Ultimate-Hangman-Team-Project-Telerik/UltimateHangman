
var Controller = typeof Controller === "undefined" ? {} : Controller;
Controller.Home = (function() {
    var self = this;
    var model = new ViewModel.Home();
    var id = "currentTable";

    return {
        init: init
    }

    function init() {
        model.loadTable(id);
    }

}());