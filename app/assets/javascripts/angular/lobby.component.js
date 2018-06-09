(function() {
    'use strict';

    angular.module('application.lobbyComponent', []).component('lobbyComponent', {
              templateUrl: 'angular/templates/lobby.html',
              controller: LobbyController,
              bindings: {
              }
            }
          );

    function LobbyController() {
      var vm = this;

      vm.$onInit = onInit;

      function onInit() {
        console.log('lobby', vm);
      }
    }
}());
