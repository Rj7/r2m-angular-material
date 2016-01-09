(function(){

  angular
    .module('app')
    .controller('ProfileController', [
      ProfileController
    ]);

  function ProfileController() {
    var vm = this;

    vm.user = {
      title: 'Admin',
      email: 'test@gmail.com ',
      mentor_type: 'Parent',
      firstName: 'Raja',
      phoneNo:'(250) 9463545',
      lastName: 'G' ,
      company: 'Road2Math Inc.' ,
      address: 'PG' ,
      city: 'PG' ,
      state: 'BC' ,
      biography: '',
      postalCode : 'V2M4E2'
    };
  }

})();
