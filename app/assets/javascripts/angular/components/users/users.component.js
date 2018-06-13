(function() {
    'use strict';

    angular.module('application.usersComponent', []).component('usersComponent', {
              templateUrl: 'angular/components/users/users.html',
              controller: UsersController,
              bindings: {
              }
            }
          );

    UsersController.$inject = ['UsersFactory'];

    function UsersController(UsersFactory) {
      var vm = this;

      vm.$onInit = onInit;
      vm.submit = submit;

      function onInit() {
        vm.user = {};
      }

      function submit() {
        var params = {
          id: vm.user.id,
          username: vm.user.username,
          email: vm.user.email
        }

        UsersFactory.save(params).$promise.then(function(data){
          console.log('data', data);
        });

        vm.user = {};

        // $http.post('/users/', {
        //   user: params
        // }).then(function(response){
        //   vm.users.push(response.data);
        //   vm.user = {};
        // }, function(){});

        // UsersFactory.createUser(params);
      }
    }
}());
