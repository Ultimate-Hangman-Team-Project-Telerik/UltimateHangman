
var ViewModel = typeof ViewModel === "undefined" ? {} : ViewModel;
ViewModel.Home = function () {
    var self = this;
    self.currentTable;

    self.loadTable = function (id) {
        $.when(Service.Home.loadTableSettings(), Service.Home.loadTableData)
            .done(function (settingsResponse, tableResponse) { 
                self.currentTable = $("#" + id).DataTable(settingsResponse);
                self.currentTable
                    .rows
                    .add(tableResponse().data)
                    .draw();
            });
    }
};