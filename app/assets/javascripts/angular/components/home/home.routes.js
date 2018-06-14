(function() {
    'use strict';

    angular.module('application')
           .config(HomeRouteConfig);

    HomeRouteConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$urlMatcherFactoryProvider'];

    function HomeRouteConfig($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {
      console.log('config? home', $stateProvider);
      $urlMatcherFactoryProvider.strictMode(false);

      $stateProvider.state('home', {
        url: '/home',
        views: {
          'main@': {
            component: 'homeComponent'
          }
        },
        resolve: {
          customForm: [function() {
          }]
        }
      });
    }
}());
