"""
    This class assigns an ID to client players
"""

class IdAssigner():

    self.PLAYER_1_ID = "PLAYER_1"
    self.PLAYER_2_ID = "PLAYER_2"
    self.connectionCount = 0

    def determinePlayer(self):

        if(self.connectionCount == 0):
            self.addConnectionCount()
            return self.PLAYER_1_ID
        elif(self.connectionCount == 1):
            self.addConnectionCount()
            return self.PLAYER_2_ID

    def addConnectionCount(self):
        self.connectionCount += 1
