(function() {
    'use strict';

    angular.module('application')
           .config(ApplicationRouteConfig);

    ApplicationRouteConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$urlMatcherFactoryProvider'];

    function ApplicationRouteConfig($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {
      $urlMatcherFactoryProvider.strictMode(false);

          $stateProvider.state('home', {
                  url: 'home/home',
                  views: {
                    'main@': {
                      component: 'homeComponent'
                    }
                  },
                  resolve: {
                    customForm: [function() {
                      console.log('hello');
                    }]
                  }
              });

              $stateProvider.state('lobby', {
                      url: 'lobby/lobby',
                      views: {
                        'main@': {
                          component: 'lobbyComponent'
                        }
                      },
                      resolve: {
                        customForm: [function() {
                          console.log('lobby');
                        }]
                      }
                  });
    }
}());
