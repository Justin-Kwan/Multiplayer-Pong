'use strict';

class ObjectDrawer {

  drawBall() {
    // clears everything on canvas previously painted from last call
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(ball.getBallXPosition(), ball.getBallYPosition(), ball.getBallRadius(), 0, 2 * Math.PI);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.closePath();
  }

  drawPaddle(PLAYER_NAME) {

    let player;

    if(PLAYER_NAME === "PLAYER_1") {
      player = player1;
    }
    else if(PLAYER_NAME === "PLAYER_2") {
      player = player2;
    }

    ctx.rect(player.getPaddleXPosition(), player.getPaddleYPosition(), player.getPaddleWidth(), player.getPaddleHeight());
    ctx.fillStyle = 'green';
    ctx.fill();

  }

}
