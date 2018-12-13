(function() {
    'use strict';

    angular.module('application')
           .config(CardsRouteConfig);

    CardsRouteConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$urlMatcherFactoryProvider'];

    function CardsRouteConfig($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {
      $urlMatcherFactoryProvider.strictMode(false);

      $stateProvider.state('cards', {
        url: '/cards',
        views: {
          'main@': {
            component: 'cardsComponent'
          }
        },
        resolve: {
          customForm: [function() {
          }]
        }
      });
    }
}());
