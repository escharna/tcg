(function() {
    'use strict';

    angular.module('application.usersComponent', []).component('usersComponent', {
              templateUrl: 'angular/components/users/users.html',
              controller: UsersController,
              bindings: {
                users: '<'
              }
            }
          );

    UsersController.$inject = ['$http', 'UsersFactory'];

    function UsersController($http, UsersFactory) {
      var vm = this;

      vm.$onInit = onInit;
      vm.submit = submit;

      function onInit() {
        vm.user = {};
        $http.get('/users/').then(function(response){
          vm.users = response.data;
        }, function(errors) {
          return errors;
        });
      }

      function submit() {
        var params = {
          id: vm.user.id,
          username: vm.user.username,
          email: vm.user.email
        }

        $http.post('/users/', {
          user: params
        }).then(function(response){
          vm.users.push(response.data);
          vm.user = {};
        }, function(){});

        // UsersFactory.createUser(params);
      }
    }
}());
