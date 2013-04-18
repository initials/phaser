/// <reference path="../../Phaser/Game.ts" />
/// <reference path="../../Phaser/Sprite.ts" />
(function () {
    var myGame = new Game(this, 'game', 800, 600, init, create, update);
    function init() {
        myGame.loader.addSpriteSheet('andre', 'assets/slf/chars_50x80.png', 50, 80, 18);
        myGame.loader.addSpriteSheet('tile', 'assets/slf/autotiles_factory.png', 60, 60, 1);
        myGame.loader.load();
    }
    var andre;
    var block;
    function create() {
        andre = myGame.createSprite(20, 300, 'andre');
        // offseting the bounding box
        andre.width = 20;
        andre.height = 30;
        // ?? offset
        //andre.bounds
        andre.drag.x = andre.drag.y = 300;
        andre.acceleration.y = 98 * 5;
        andre.animations.add('run', [
            6, 
            7, 
            8, 
            9, 
            10, 
            11
        ], 12, true);
        andre.animations.add('idle', [
            1, 
            2, 
            3
        ], 12, true);
        andre.animations.play('run', 12, true);
        block = myGame.createSprite(20, 500, 'tile');
        block.solid = true;
        block.immovable = true;
    }
    function update() {
        if(myGame.input.keyboard.isDown(Keyboard.LEFT)) {
            andre.velocity.x = -100;
            // no facing attribute?
            //andre.scale.x = -1;
                    }
        if(myGame.input.keyboard.isDown(Keyboard.RIGHT)) {
            andre.velocity.x = 100;
            // no facing attribute
            //andre.scale.x = 1;
                    }
        if(myGame.input.keyboard.isDown(Keyboard.SPACEBAR)) {
            andre.velocity.y = -500;
        }
        /*
        if (andre.velocity.x == 0) {
        andre.animations.play('idle', 12, true);
        }
        else {
        andre.animations.play('run', 12, true);
        }
        */
        myGame.collide(andre, block, collides);
    }
    function collides(a, b) {
        andre.animations.play('idle', 12, true);
        console.log('Collision!!!!!');
    }
})();
