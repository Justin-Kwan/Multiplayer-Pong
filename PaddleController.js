'use strict';

class PaddleController {

  checkKeyInput() {

    document.addEventListener('keypress', function(event) {

      // PLAYER 1, w key
      if(event.keyCode === 119) {
        player1.keyUp   = true;
        player1.keyDown = false;
      }
      // s key
      else if(event.keyCode === 115) {
        player1.keyDown = true;
        player1.keyUp   = false;
      }

      // PLAYER 2, i key
      if(event.keyCode === 105) {
        player2.keyUp   = true;
        player2.keyDown = false;
      }
      // k key
      else if(event.keyCode === 107) {
        player2.keyDown = true;
        player2.keyUp   = false;
      }

    });

    document.addEventListener("keyup", function(event) {
      if (event.keyCode === 87 || event.keyCode === 83) {
        player1.keyUp   = false;
        player1.keyDown = false;
      }
      if (event.keyCode === 73 || event.keyCode === 75) {
        player2.keyUp   = false;
        player2.keyDown = false;
      }
    });

  }

}
