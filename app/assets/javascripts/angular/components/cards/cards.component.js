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
        vm.cards = null;
        vm.cardSearchText = '';
      }

      function importCards() {
        CardsFactory.get({
          name: vm.cardSearchText
        }).$promise.then(function(response) {
          vm.cards = response.data;
          console.log('done', response.data);
        });
      }
    }
}());
