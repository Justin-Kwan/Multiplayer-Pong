class GamePanel {

  getPanelWidth() {

    const panelWidth = window.innerWidth
                     || document.documentElement.clientWidth
                     || document.body.clientWidth;

    // finds html tag gamePanel with width attribute and sends value
    document.getElementById('gamePanel').width = panelWidth - 28;

  }

  getPanelHeight() {

    const panelHeight = window.innerHeight
                      || document.documentElement.clientHeight
                      || document.body.clientHeight;

                      console.log(panelHeight);

    document.getElementById('gamePanel').height = panelHeight - 28;

  }

}

const gamePanel = new GamePanel();
gamePanel.getPanelWidth();
gamePanel.getPanelHeight();
