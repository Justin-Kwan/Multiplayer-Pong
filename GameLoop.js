'use strict';

// create object initializer instance
let gameInitializer = new GameInitializer();

// create game object instances
let canvas;
let ctx;
let ball;
let player1;
let player2;
let objectDrawer;
let paddleController;
let collisionDetector;
let socketEmitter;

class GameLoop {

  runBallComponents() {
    // ball functions
    collisionDetector.detectBallWallCollision();
    ball.updateBallXPosition();
    ball.updateBallYPosition();
    objectDrawer.drawBall();
  }

  runPaddleComponents() {
    // paddle functions
    collisionDetector.detectPaddleWallCollision("PLAYER_1");
    collisionDetector.detectPaddleWallCollision("PLAYER_2");
    paddleController.checkKeyInput();
    player1.updatePaddleYPosition();
    player2.updatePaddleYPosition();
    objectDrawer.drawPaddle("PLAYER_1");
    objectDrawer.drawPaddle("PLAYER_2");
  }

  runGameLoop() {
    gameLoop.runBallComponents();
    gameLoop.runPaddleComponents();
    collisionDetector.detectPaddleBallCollision("PLAYER_1");
    collisionDetector.detectPaddleBallCollision("PLAYER_2");
    let isBallOutOfBounds = collisionDetector.detectBallOutOfBounds();
    gameInitializer.checkForGameReset(isBallOutOfBounds);
    window.requestAnimationFrame(gameLoop.runGameLoop);
  }

}

let gameLoop = new GameLoop();

gameInitializer.initGame();
gameLoop.runGameLoop();
