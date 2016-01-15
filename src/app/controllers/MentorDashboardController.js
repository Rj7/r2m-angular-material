(function(){

    angular
        .module('app')
        .controller('MentorDashboardController', [
            'tableService',
            MentorDashboardController
        ]);

    function MentorDashboardController(tableService) {
        var vm = this;

        vm.tableData = [];

        tableService
            .loadAllItems()
            .then(function(tableData) {
                vm.tableData = [].concat(tableData);
            });
    }

})();
