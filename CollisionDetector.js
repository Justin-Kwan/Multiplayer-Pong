'use strict';

 class CollisionDetector {

  detectBallWallCollision() {
    if(ball.getBallYPosition() + ball.getBallRadius() > canvas.height || ball.getBallYPosition() - ball.getBallRadius() < 0) {
      ball.ySpeed = -ball.ySpeed;
    }
  }

  detectBallOutOfBounds() {
    if(ball.getBallRightEdge() < 0 || ball.getBallLeftEdge() > canvas.width) {
      return true;
    }
  }

  detectPaddleWallCollision(PLAYER_NAME) {

    let player;

    if(PLAYER_NAME === "PLAYER_1") {
      player = player1;
    }
    else if(PLAYER_NAME === "PLAYER_2") {
      player = player2;
    }

    if(player.getPaddleYPosition() + player.getPaddleHeight() > canvas.height || player.getPaddleYPosition() < 0) {

      if((player.getPaddleYPosition() + player.getPaddleHeight() > canvas.height && player.keyUp === true)
      || (player.getPaddleYPosition() < 0 && player.keyDown === true)) {
        player.updatePaddleYSpeed(4);
      }
      else {
        player.updatePaddleYSpeed(0);
      }
    }

  }

  detectPaddleBallCollision(PLAYER_NAME) {

    if(PLAYER_NAME === "PLAYER_1") {

      console.log("2");

      let initialContacts = this.detectInitialBallPaddleContact(PLAYER_NAME);

      // collision occured
      if(initialContacts[0] && initialContacts[1]) {

        // calculate which surface of ball and paddle collision occured
        let topPaddleBottomBallDistance = Math.abs(ball.getBallBottomEdge() - player1.getPaddleTopEdge());
        let bottomPaddleTopBallDistance = Math.abs(ball.getBallTopEdge() - player1.getPaddleBottomEdge());
        let rightPaddleLeftBallDistance = Math.abs(ball.getBallLeftEdge() - player1.getPaddleRightEdge());

        let collisionDistances = [topPaddleBottomBallDistance, bottomPaddleTopBallDistance, rightPaddleLeftBallDistance];
        collisionDistances.sort(function(a, b){return a-b});

        if(collisionDistances[0] === rightPaddleLeftBallDistance) {
          ball.xSpeed = -ball.xSpeed;
        }
        else if(collisionDistances[0] === topPaddleBottomBallDistance && ball.ySpeed > 0) {
          ball.ySpeed = -ball.ySpeed;
        }
        else if(collisionDistances[0] === topPaddleBottomBallDistance && ball.ySpeed < 0) {
          ball.ySpeed -= 2;
          ball.xSpeed -= 1;
        }
        else if(collisionDistances[0] === bottomPaddleTopBallDistance && ball.ySpeed > 0) {
          ball.ySpeed += 2;
          ball.xSpeed -= 1;
        }
        else if(collisionDistances[0] === bottomPaddleTopBallDistance && ball.ySpeed < 0) {
          ball.ySpeed = -ball.ySpeed;
        }

      }

    }
    else if(PLAYER_NAME === "PLAYER_2") {

      console.log("2");

      let initialContacts = this.detectInitialBallPaddleContact(PLAYER_NAME);

      // collision occured
      if(initialContacts[0] && initialContacts[1]) {

        // calculate which surface of ball and paddle collision occured
        let topPaddleBottomBallDistance = Math.abs(ball.getBallBottomEdge() - player2.getPaddleTopEdge());
        let bottomPaddleTopBallDistance = Math.abs(ball.getBallTopEdge() - player2.getPaddleBottomEdge());
        let leftPaddleRightBallDistance = Math.abs(ball.getBallRightEdge() - player2.getPaddleLeftEdge());

        let collisionDistances = [topPaddleBottomBallDistance, bottomPaddleTopBallDistance, leftPaddleRightBallDistance];
        collisionDistances.sort(function(a, b){return a-b});

        if(collisionDistances[0] === leftPaddleRightBallDistance) {
          ball.xSpeed = -ball.xSpeed;
        }
        else if(collisionDistances[0] === topPaddleBottomBallDistance && ball.ySpeed > 0) {
          ball.ySpeed = -ball.ySpeed;
        }
        else if(collisionDistances[0] === topPaddleBottomBallDistance && ball.ySpeed < 0) {
          ball.ySpeed -= 2;
          ball.xSpeed += 1;
        }
        else if(collisionDistances[0] === bottomPaddleTopBallDistance && ball.ySpeed > 0) {
          ball.ySpeed += 2;
          ball.xSpeed += 1;
        }
        else if(collisionDistances[0] === bottomPaddleTopBallDistance && ball.ySpeed < 0) {
          ball.ySpeed = -ball.ySpeed;
        }

      }

    }

  }

  detectInitialBallPaddleContact(PLAYER_NAME) {

    let player;
    let ballWithinPaddleX;

    if(PLAYER_NAME === "PLAYER_1") {
      player = player1;
      ballWithinPaddleX = ball.getBallLeftEdge() < player.getPaddleRightEdge();
    }
    else if(PLAYER_NAME === "PLAYER_2") {
      player = player2;
      ballWithinPaddleX = ball.getBallRightEdge() > player.getPaddleLeftEdge();
    }

    let ballWithinPaddleY = ball.getBallYPosition() - ball.getBallRadius() < player.getPaddleBottomEdge()
                            && ball.getBallYPosition() + ball.getBallRadius() > player.getPaddleTopEdge();

    let initialContacts = [ballWithinPaddleX, ballWithinPaddleY];
    return initialContacts;
  }

}
