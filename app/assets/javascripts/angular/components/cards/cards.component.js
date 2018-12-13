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
<<<<<<< HEAD
        vm.cards = null;
        vm.cardSearchText = '';
=======
        vm.card = null;
>>>>>>> c945430e28b3d3fa91661d104f86fd1c677d823b
      }

      function importCards() {
        CardsFactory.get({
<<<<<<< HEAD
          name: vm.cardSearchText
        }).$promise.then(function(response) {
          vm.cards = response.data;
          console.log('done', response.data);
=======
          name: vm.card.name
        }).$promise.then(function(response) {
          vm.card = response.data[0];
          console.log('done', response.data[0]);
>>>>>>> c945430e28b3d3fa91661d104f86fd1c677d823b
        });
      }
    }
}());
