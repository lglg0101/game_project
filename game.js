class Game {
    constructor($canvas) {
        this.canvas = $canvas;
        this.context = $canvas.getContext("2d");
        this.height = $canvas.height;
        this.width = $canvas.width;
        this.player = new Player(this);
        this.background = new Background(this);
        this.controls = new Controls(this);
        this.controls.setControls();
        this.troll = [];
        this.video = [];
        this.coins = [];
        this.trollSpeed = 3000;
        this.videoSpeed = 6000;
        this.trollTimer = 0;
        this.videoTimer = 0;
    }

//calling my drawing's everything 
    drawEverything(timestamp) {
        this.clearAll();
        this.background.draw();
        this.player.draw();
        
        for (let i = 0; i < this.troll.length; i++) {
            this.troll[i].draw();
        }
        
        for (let i = 0; i < this.video.length; i++) {
            this.video[i].draw();
        }
        
        this.updateEverything(timestamp)
        window.requestAnimationFrame(timestamp => this.drawEverything(timestamp));
    }
    
//update everything 
    updateEverything(timestamp) {
        this.player.update();
        console.log(this.video)
        // console.log(this.)

//if timer is less than (timestamp - 3 seconds), push new troll into array 
        if (this.trollTimer < timestamp - this.trollSpeed) {
            this.troll.push(new Troll(this));

            this.trollTimer = timestamp; 
        } 

//if timer is less than (timestamp - 6 seconds), push new video into array 
        if (this.videoTimer < timestamp - this.videoSpeed) { 
            this.video.push(new Video(this));
            this.videoTimer = timestamp; 
        }
     
        
        for (let i = 0; i < this.troll.length; i++) {
            this.troll[i].update();

        }
            // if(this.player.checkCollision(this.player, this.troll[i])) {
            // this.player.score++;
            // this.troll.splice(i, 1);
            //         }
        
        for (let i = 0; i < this.video.length; i++) {
            this.video[i].update()
        }
}

//animation
    animation(timestamp) {
        this.drawEverything()
        this.updateEverything(timestamp)
    }


//clear the canvas

clearAll() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
}


//reset the game
resetGame() {
    this.player = new Player(100, 100);
}

//start the game
start() {
    this.animation();

}} 

