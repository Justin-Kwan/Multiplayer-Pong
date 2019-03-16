'use strict';

class Paddle {

  constructor(PLAYER_NAME, PLAYER_X_POS, PLAYER_Y_POS) {
    this.player  = PLAYER_NAME;
    this.paddleX = PLAYER_X_POS;    // will be variable, passed in
    this.paddleY = PLAYER_Y_POS;
    this.xSpeed  = 0;
    this.ySpeed  = 5;
    this.width   = 15;
    this.height  = 120;
    this.leftEdge   = this.paddleX;
    this.rightEdge  = this.paddleX + this.width;
    // booleans for paddle key control direction
    this.keyUp;
    this.keyDown;
  }

  updatePaddleYPosition() {

    if(this.keyUp == true && this.keyDown == false) {
      this.paddleY -= this.ySpeed;
    }
    else if(this.keyDown == true && this.keyUp == false) {
      this.paddleY += this.ySpeed;
    }

  }

  getPaddleXPosition() {
    return this.paddleX;
  }

  getPaddleYPosition() {
    return this.paddleY;
  }

  getPaddleWidth() {
    return this.width;
  }

  getPaddleHeight() {
    return this.height;
  }

  getPaddleRightEdge() {
    return this.rightEdge;
  }

  getPaddleLeftEdge() {
    return this.leftEdge;
  }

  getPaddleTopEdge() {
    return this.getPaddleYPosition();
  }

  getPaddleBottomEdge() {
    return this.getPaddleYPosition() + 120;
  }

  updatePaddleYSpeed(newYSpeed) {
    this.ySpeed = newYSpeed;
  }

}
