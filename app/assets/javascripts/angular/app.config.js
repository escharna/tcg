(function() {
  'use strict';

  angular.module('application').config(ConfigApp).run(RunApp);

  ConfigApp.$inject = [];

  function ConfigApp(){
    // $locationProvider.html5Mode({
    //   enabled: true,
    //   rewriteLinks: false
    // });
    //
    // $resourceProvider.defaults.stripTrailingSlashes = false;
  }


  RunApp.$inject = ['$http'];

  function RunApp($http){
    var token = document.querySelector('meta[name=csrf-token]');

    $http.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    if (token && token.content) {
      $http.defaults.headers.common['X-CSRF-Token'] = token.content;
    }
  }
})();
