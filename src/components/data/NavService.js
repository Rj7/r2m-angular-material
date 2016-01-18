(function(){
  'use strict';

  angular.module('app')
          .service('navService', [
          '$q',
          navService
  ]);

  function navService($q){
    var menuItems = [
      {
        name: 'Dashboard',
        icon: 'dashboard',
        sref: '.dashboard'
      },
      {
        name: 'Reports',
        icon: 'trending_up',
        sref: '.table'
      },
      //{
      //  name: 'Class',
      //  icon: 'supervisor_account',
      //  sref: '.table'
      //},
      {
        name: 'Users',
        icon: 'supervisor_account',
        sref: '.students'
      },
      {
        name: 'Settings',
        icon: 'person',
        sref: '.profile'
      }
    ];

    return {
      loadAllItems : function() {
        return $q.when(menuItems);
      }
    };
  }

})();
