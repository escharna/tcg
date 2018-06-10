(function() {
    'use strict';

    angular.module('application.homeComponent', []).component('homeComponent', {
              templateUrl: 'angular/components/home/home.html',
              controller: HomeController,
              bindings: {
              }
            }
          );

    function HomeController() {
      var vm = this;

      vm.$onInit = onInit;

      function onInit() {
        console.log('init', vm);
      }
    }
}());
