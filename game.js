class Game {
    constructor($canvas, $display) {
        //game canvas 
        this.canvas = $canvas;
        this.context = $canvas.getContext("2d");
        this.height = $canvas.height;
        this.width = $canvas.width;

        //display canvas 
        this.display = $display;
        this.displayContext = $display.getContext("2d");
        this.displayHeight = $display.height;
        this.displayWidth = $display.width; 


        this.player = new Player(this);
        this.background = new Background(this);
        this.controls = new Controls(this);
        this.controls.setControls();
        this.score = new Score(this);
        this.troll = [];
        this.video = [];
        this.coin = [];
        this.trollSpeed = 2000;
        this.videoSpeed = 6000;
        this.coinSpeed = 2000;
        this.trollTimer = 0;
        this.videoTimer = 0;
        this.coinTimer = 0;
        this.end = false;
        // this.sounds = new Sounds (this);
        this.gameover = new Gameover (this);

    }

    //calling my drawing's everything 
    drawEverything(timestamp) {
        this.clearAll();
        this.background.draw();
        this.player.draw();
        this.score.draw();

        for (let i = 0; i < this.troll.length; i++) {
            this.troll[i].draw();
        }

        for (let i = 0; i < this.video.length; i++) {
            this.video[i].draw();
        }

        for (let i = 0; i < this.coin.length; i++) {
            this.coin[i].draw();
        }


        this.updateEverything(timestamp)
        const animation = window.requestAnimationFrame(timestamp => this.drawEverything(timestamp));
        if (this.end) {
            window.cancelAnimationFrame(animation);
        }
    }

    //update everything 
    updateEverything(timestamp) {
        this.player.update();
        //console.log(this.video)
        //console.log(this.troll);


        // if Troll timer is less than (timestamp - 3 seconds), push new troll into array 
        if (this.trollTimer < timestamp - this.trollSpeed) {
            this.troll.push(new Troll(this));
            this.trollTimer = timestamp;
        }


        //if Video timer is less than (timestamp - 6 seconds), push new video into array 
        if (this.videoTimer < timestamp - this.videoSpeed) {
            this.video.push(new Video(this));
            this.videoTimer = timestamp;
        }

        //if Coin timer is less than (timestamp - 4 secondss), push new video into array 
        if (this.coinTimer < timestamp - this.coinSpeed) {
            this.coin.push(new Coin(this));
            this.coinTimer = timestamp;
        }

        //update troll
        for (let i = 0; i < this.troll.length; i++) {
            this.troll[i].update();
        }

        //update video 
        for (let i = 0; i < this.video.length; i++) {
            this.video[i].update()
        }

        //update coin 
        for (let i = 0; i < this.coin.length; i++) {
            this.coin[i].update()
        }

        //call collision function with troll - end game 
            for (let i = 0; i < this.troll.length; i++) {
                if (this.collision(this.player, this.troll[i])) {
                    this.video.splice(i, 1);
                    this.endGame();
                    console.log("TROLL COLLISION", );
                }
            }
    
        //call collision function with video - score points 
            for (let i = 0; i < this.video.length; i++) {
                if (this.collision(this.player, this.video[i])) {
                    this.video.splice(i, 1);
                    this.score.videoPoints();
                    // this.sounds.play();
                    console.log(this.score.score);
                    console.log("VIDEO COLLISION", this.score.score);
                }
            }

        //call collision function with coins - score points 
            for (let i = 0; i < this.coin.length; i++) {
                if (this.collision(this.player, this.coin[i])) {
                    this.coin.splice(i, 1); 
                    this.score.score += 10;
                    console.log("COIN COLLISION", this.score.score); 
                }
            }
        }

    //animation
    animation(timestamp) {
        this.drawEverything()
        this.updateEverything(timestamp)
    }

    //collision function
    collision(player, obj) { 
    if (player.x < obj.x + obj.objectWidth  && player.x + player.playerWidth  > obj.x &&
    player.y < obj.y + obj.objectHeight && player.y + player.playerHeight > obj.y){ 
        return true;
    } 
} 

    //clear the canvas
    clearAll() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }


    //reset the game
    endGame() {
        this.end = true;
        // this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.gameover.draw()

    }

    //start the game
    start() {
        this.animation();
    }
}