(function() {
    'use strict';

    angular.module('application.cardsComponent', []).component('cardsComponent', {
              templateUrl: 'angular/components/cards/cards.html',
              controller: CardsController,
              bindings: {
              }
            }
          );

    CardsController.inject = ['CardsFactory'];

    function CardsController(CardsFactory) {
      var vm = this;

      vm.$onInit = onInit;
      vm.importCards = importCards;

      function onInit() {
        console.log('cards');
        vm.card = null;
      }

      function importCards() {
        CardsFactory.get({
          name: vm.card.name
        }).$promise.then(function(response) {
          vm.card = response.data[0];
          console.log('done', response.data[0]);
        });
      }
    }
}());
