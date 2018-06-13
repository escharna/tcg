(function() {
  'use strict';

  angular.module('application', [
    'ng-token-auth',
    'ui.router',
    'ngResource',
    'templates',
    'application.homeComponent',
    'application.lobbyComponent',
    'application.usersComponent',
    'application.usersFactory'
  ]).config(function($authProvider) {
    // $authProvider.configure({
    //   apiUrl: 'http://localhost:3000'
    // });
  });
})();
