(function() {
  'use strict';

  angular.module('application.usersComponent')
         .config(UsersRouteConfig);

  UsersRouteConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$urlMatcherFactoryProvider'];

  function UsersRouteConfig($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {
    $urlMatcherFactoryProvider.strictMode(false);

    $stateProvider.state('usersNew', {
      url: 'users/new',
      views: {
        'main@': {
          component: 'usersComponent'
        }
      },
      resolve: {
        users: ['UsersFactory', function(UsersFactory) {
        }]
      }
    });
  }
}());
