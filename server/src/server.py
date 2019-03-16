from flask import Flask
from flask_socketio import SocketIO, send

app = Flask(__name__)
app.config['SECRET_KEY'] = 'mysecret'
socketio = SocketIO(app)

# on receiving a message, execute function
@socketio.on('message')
def handleMessage(msg):

    isTooManyPlayers = playerCounter.checkIfTooManyPlayers()

    if(isTooManyPlayers == False):
        playerCounter.playerCount += 1

    print('Message: ' + msg)
    # bounce message back
    send(playerCounter.playerCount, broadcast=True)

if __name__ == '__main__':
	socketio.run(app)

class PlayerCounter:
    playerCount = 0;

    def checkIfTooManyPlayers(self):
        if(self.playerCount == 2):
            return True
        return False

playerCounter = PlayerCounter()
