(function(){

    angular
        .module('app')
        .controller('MentorClassListController', [
            'tableService',
            TableController
        ]);



    function TableController(tableService) {
        var vm = this;

        vm.tableData = [
            {
                name: 'Raja',
                status: 'Active',
                added_on: '5 Dec',

            },
            {
                name: 'Suresh',
                status: 'Trail Expired',
                added_on: '10 Dec',
            },
            {
                name: 'Holger',
                status: '2 Days Trail Pending',
                added_on: '10 Dec',
            },
            {
                name: 'Pat',
                status: 'Deleted',
                added_on: '10 Dec',
            }
        ];

        vm.showStudentDetails = function($event){
            console.log('got it');
        }
    }
})();
