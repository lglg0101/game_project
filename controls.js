class Controls {
    constructor(game) {
        this.game = game;
        this.player = this.game.player
    }

    
    setControls() {
        window.addEventListener('keydown', event => {
            event.preventDefault();
            switch (event.keyCode) {
                //LEFT
                case 37:
                    this.game.player.vx = -5
                    break;
                    //RIGHT
                case 39:
                    this.game.player.vx = 5
                    break;
                    //UP
                case 38:
                    this.game.player.vy = -5
                    break;
                    //DOWN
                case 40:
                    this.game.player.vy = 5
                    break;
            }
        })
        
        window.addEventListener('keyup', event => {
            event.preventDefault();
            switch (event.keyCode) {
                //LEFT
                case 37:
                    this.game.player.vx = 0
                    break;
                    //RIGHT
                case 39:
                    this.game.player.vx = 0
                    break;
                    //UP
                case 38:
                    this.game.player.vy = 0
                    break;
                    //DOWN
                case 40:
                    this.game.player.vy = 0
                    break;
            }
        })
    }
}