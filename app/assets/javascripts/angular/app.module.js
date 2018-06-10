(function() {
  'use strict';

  angular.module('application', [
    'ui.router',
    'templates',
    'application.homeComponent',
    'application.lobbyComponent',
    'application.usersComponent',
    'application.usersFactory'
  ]);
})();
