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
      vm.tapCard = tapCard;

      function onInit() {
        console.log('cards');
        vm.cards = null;
        vm.cardSearchText = '';
        vm.tappedCards = [];
      }

      function importCards() {
        CardsFactory.get({
          name: vm.cardSearchText
        }).$promise.then(function(response) {
          vm.cards = response.data;
          console.log('done', response.data);
        });
      }

      function tapCard(card) {
        if (vm.tappedCards.indexOf(card) === -1) {
          vm.tappedCards.push(card);
        } else {
          vm.tappedCards.splice(vm.tappedCards.indexOf(card), 1);
        }
        console.log(vm.tappedCards.indexOf(card));
      }
    }
}());
