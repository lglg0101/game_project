class Gameover {
    constructor(game) {
        this.game = game;
        this.context = game.context;
        this.gameOverImg = new Image();
        this.gameOverImg.src = 'images/character2.png'

        this.winImg = new Image();
        this.winImg.src = 'images/happypepe.png'

        this.winAudio = new Audio(); 
        this.winAudio.src = 'audio/win.mp3'
    } 

    draw() {
        this.context.save();
        this.context.drawImage(this.gameOverImg, 0, 50, 500, 400);
        this.context.restore();
    }

    win() {
        if (this.game.score.videoNumber > 20) {
            this.game.sound.pause();
            this.winAudio.play()
            this.game.end = true;
            this.winDraw();
        }  
    }

    winDraw() {
        this.context.save();
        this.context.drawImage(this.winImg, 0, 0, 500, 450);
        this.context.restore();
    }


reset() {
        console.log('reset is working');

        //youtube image search
        $clipCanvas.src = "images/transparent2.png";

        //background reset 
        this.game.background.y = 0;
        this.game.background.x = 0;
        this.game.background.img = new Image();
        this.game.background.img.src = "images/back4canvas.png";


        //game reset
        this.game.troll = [];
        this.game.video = [];
        this.game.coin = [];
        this.game.trollSpeed = 2000;
        this.game.videoSpeed = 6000;
        this.game.coinSpeed = 2000;
        this.game.trollTimer = 0;
        this.game.videoTimer = 0;
        this.game.coinTimer = 0;
        this.game.end = false;

        //score reset 
        this.game.score.score = 0;
        this.game.score.coinScore = 10;
        this.game.score.videoScore = 50;
        this.game.score.videoNumber = 0;
        this.game.score.videoNumScore = 1;

        //arrays reset 
        
        this.clipsArray = [
            'screenshots/rick.png',
            'screenshots/no.png',
            'screenshots/numa.png',
            'screenshots/charlie.png',
            'screenshots/keyboard.png',
            'screenshots/evolution.png',
            'screenshots/friday.png',
            'screenshots/dramatic.png',
            'screenshots/bacon.png',
            'screenshots/david.png',
            'screenshots/britney.png',
            'screenshots/babymonkey.png',
            'screenshots/potter.png',
            'screenshots/father.png',
            'screenshots/panda.png',
            'screenshots/turtles.png',
            'screenshots/badger.png',
            'screenshots/hide.png',
            'screenshots/nobody.png',
            'screenshots/shoes.png',
        ]
       
        this.audioArray = [
           'audio/rick.mp3',
           'audio/no.mp3',
           'audio/numa.mp3',
           'audio/charlie.mp3',
           'audio/keyboard.mp3',
           'audio/evolution.mp3',
           'audio/friday.mp3',
           'audio/dramatic.mp3',
           'audio/bacon.mp3',
           'audio/david.mp3',
           'audio/britney.mp3',
           'audio/babymonkey.mp3',
           'audio/potter.mp3', 
           'audio/father.mp3',
           'audio/panda.mp3',
           'audio/turtles.mp3',
           'audio/badger.mp3',
           'audio/hide.mp3',
           'audio/nobody.mp3',
           'audio/shoes.mp3',
       ]
       

        //player reset
        this.game.player.x = 350;
        this.game.player.y = 0
        this.game.player.vx = 0;
        this.game.player.vy = 0.5;
        this.game.player.score = 0;
        this.game.player.gravity = 0.05;

        //video reset 
        this.game.video.y = this.height;
        this.game.video.x = Math.floor((Math.random() * this.game.width) + 10);
        this.game.video.vy = -1;
        this.game.video.vx = -1;

        //coins reset 
        this.game.coin.y = Math.floor((Math.random() * this.game.width) + 10);
        this.game.coin.x = Math.floor((Math.random() * this.game.width) + 10);
        this.game.coin.vy = -4;
        this.game.coin.vx = -1;

        //trolls reset 
      
        this.game.troll.x = Math.floor((Math.random() * this.game.width) + 10);
        this.game.troll.y = this.height;
        this.game.troll.vy = -5;
        this.game.troll.vx = -5;

    
    } } 