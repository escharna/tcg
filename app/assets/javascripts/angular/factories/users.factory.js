(function() {
  'use strict';

  angular.module('application.usersFactory', ['ngResource'])
         .factory('UsersFactory', UsersFactory);

  UsersFactory.$inject = ['$resource'];

  function UsersFactory($resource) {
    return $resource('/api/users', null, {});
  }

})();
