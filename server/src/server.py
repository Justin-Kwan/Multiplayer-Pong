from flask import Flask
from flask_socketio import SocketIO, send
from IdAssigner import IdAssigner

app = Flask(__name__)
app.config['SECRET_KEY'] = 'mysecret'
socketio = SocketIO(app)

idAssigner = IdAssigner()

@socketio.on('message')
def handleMessage(msg):

    # if client sends connecion msg
    if(msg == "CONNECTION"):
        playerId = idAssigner.determinePlayer()
        emit(playerId)

    # if msg received = direction/movement
    print('Message: ' + msg)
    emit("Hello", broadcast=True)

if __name__ == '__main__':
	socketio.run(app)
