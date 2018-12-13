(function () {
  'use strict';

  angular.module('application.cardsFactory', [
    'ngResource'
  ]).factory('CardsFactory', CardsFactory);

  CardsFactory.$inject = ['$resource'];

  function CardsFactory($resource) {
    return $resource("https://api.scryfall.com/cards/search?q=:name", null, {});
  }
})();
