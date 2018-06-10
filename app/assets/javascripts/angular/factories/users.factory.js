(function() {
  'use strict';

  angular.module('application.usersFactory', [])
         .factory('UsersFactory', UsersFactory);

  UsersFactory.$inject = ['$http', '$q'];

  function UsersFactory($http, $q) {
    return {
      getUsers: getUsers,
      createUser: createUser
    }

    function getUsers() {
      $http.get('/users/').then(getComplete, getFailed);
    }

    function createUser(params) {
      $http.post('/users/', {
        user: params
      }).then(getComplete, getFailed);
    }

    function getComplete(response) {
      return response.data;
    }

    function getFailed(errors) {
      console.log('errors', errors);
      $q.reject(errors);
    }
  }

})();
