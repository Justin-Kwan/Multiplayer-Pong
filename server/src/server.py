from flask import Flask
from flask_socketio import SocketIO, send

app = Flask(__name__)
app.config['SECRET_KEY'] = 'mysecret'
socketio = SocketIO(app)

# on receiving a message, execute function
@socketio.on('message')
def handleMessage(msg):

    print('Message: ' + msg)
    #send("Hello", broadcast=True)

if __name__ == '__main__':
	socketio.run(app)
