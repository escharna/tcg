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
      vm.hovering = hovering;
      vm.notHovering = notHovering;

      function onInit() {
        console.log('cards');
        vm.cards = null;
        vm.cardSearchText = '';
        vm.tappedCards = [];
        vm.hover = null;
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

      function hovering(card) {
        console.log('i am hovering');
        vm.hover = card;
      }

      function notHovering(card) {
        vm.hover = null;
        console.log('i am no longer hovering');
      }
    }
}());
