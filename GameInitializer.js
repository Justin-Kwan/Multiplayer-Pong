'use strict';

class GameInitializer {

  initGame() {
    // link canvas to html canvas tag
    canvas            = document.getElementById('gamePanel');
    ctx               = canvas.getContext('2d');
    ball              = new Ball();
    player1           = new PaddlePlayer1();
    player2           = new PaddlePlayer2();
    objectDrawer      = new ObjectDrawer();
    paddleController  = new PaddleController();
    collisionDetector = new CollisionDetector();
    //document.addEventListener("keydown", paddleController.checkKeyInput, false);
  }

  checkForGameReset(isBallOutOfBounds) {
    if(isBallOutOfBounds) {
      this.resetGame();
      isBallOutOfBounds = null;
    }
  }

  resetGame() {
      ball.resetBallXPosition();
      ball.resetBallYPosition();
      ball.resetBallSpeed();
  }

}
