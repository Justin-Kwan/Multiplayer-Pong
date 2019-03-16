'use strict';

class Ball {

  constructor() {
    this.centerX = canvas.width / 2;
    this.centerY = canvas.height / 2;
    this.radius  = 20;
    this.xSpeed  = 3;
    this.ySpeed  = 3;
  }

  updateBallXPosition() {
    this.centerX += this.xSpeed;
  }

  updateBallYPosition() {
    this.centerY += this.ySpeed;
  }

  getBallXPosition() {
    return this.centerX;
  }

  getBallYPosition() {
    return this.centerY;
  }

  getBallRadius() {
    return this.radius;
  }

  getBallTopEdge() {
    return ball.centerY - this.radius;
  }

  getBallBottomEdge() {
    return ball.centerY + this.radius;
  }

  getBallLeftEdge() {
    return ball.centerX - this.radius;
  }

  getBallRightEdge() {
    return ball.centerX + this.radius;
  }

  resetBallXPosition() {
    this.centerX = canvas.width / 2;
  }

  resetBallYPosition() {
    this.centerY = canvas.height / 2;
  }

  resetBallSpeed() {
    this.xSpeed  = 3;
    this.ySpeed  = 3;
  }

}
