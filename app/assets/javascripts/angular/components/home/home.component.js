(function() {
    'use strict';

    angular.module('application.homeComponent', []).component('homeComponent', {
              templateUrl: 'angular/components/home/home.html',
              controller: HomeController,
              bindings: {
              }
            }
          );

    HomeController.$inject = ['$http'];

    var player;

    function HomeController($http) {
      var vm = this;

      vm.$onInit = onInit;

      function onInit() {
        initGame();
      }

      function initGame(){
        var config = {
            type: Phaser.AUTO,
            width: 800,
            height: 600,
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 300 },
                    debug: false
                }
            },
            scene: {
                preload: preload,
                create: create,
                update: update
            }
        };

        vm.game = new Phaser.Game(config);

        function preload (){
          console.log('this', this);
          this.load.image('bg', '/api/serve_image/bg.jpg');
          this.load.spritesheet('dude',
            '/api/serve_image/dude.jpg',
            { frameWidth: 32, frameHeight: 48 }
          );
        }

        function create (){
          this.add.image(400, 300, 'bg');

          player = this.physics.add.sprite(100, 450, 'dude');

          player.setBounce(0.2);
          player.setCollideWorldBounds(true);

          this.anims.create({
              key: 'left',
              frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
              frameRate: 10,
              repeat: -1
          });

          this.anims.create({
              key: 'turn',
              frames: [ { key: 'dude', frame: 4 } ],
              frameRate: 20
          });

          this.anims.create({
              key: 'right',
              frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
              frameRate: 10,
              repeat: -1
          });
        }

        function update (){
          var cursors = this.input.keyboard.createCursorKeys();

          if (cursors.left.isDown)
          {
              player.setVelocityX(-160);

              player.anims.play('left', true);
          }
          else if (cursors.right.isDown)
          {
              player.setVelocityX(160);

              player.anims.play('right', true);
          }
          else
          {
              player.setVelocityX(0);

              player.anims.play('turn');
          }

          if (cursors.up.isDown)
          {
              player.setVelocityY(-200);
          }
        }
      }
    }
}());
