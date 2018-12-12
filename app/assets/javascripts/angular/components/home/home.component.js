(function() {
    'use strict';

    angular.module('application.homeComponent', []).component('homeComponent', {
              templateUrl: 'angular/components/home/home.html',
              controller: HomeController,
              bindings: {
              }
            }
          );

    HomeController.$inject = ['$http'];

    var player;

    function HomeController($http) {
      var vm = this;

      vm.$onInit = onInit;

      function onInit() {
        console.log('hi');
      }
    }
}());
