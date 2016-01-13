(function(){
  'use strict';

  angular.module('app')
        .service('tableService', [
        '$q',
      tableService
  ]);

  function tableService($q){
    var tableData = [
      {
        name: 'Raja',
        progress: 40,
        status: 'Level 5',
        class: 'md-accent'
      },
      {
        name: 'Suresh',
        progress: 60,
        status: 'Level 7',
        class: 'md-accent'
      }
    ];

    return {
      loadAllItems : function() {
        return $q.when(tableData);
      }
    };
  }
})();
