class Gameover { 
    constructor(game) {
        this.game = game;
        this.context = game.context;
        this.gameOverImg = new Image ();
        this.gameOverImg.src = 'images/character2.png' 

        this.winImg = new Image ();
        this.winImg.src = 'images/happypepe.png'
    } 

draw() { 
        this.context.save();
        this.context.drawImage(this.gameOverImg, 0, 50, 500, 400);
        this.context.restore();
} 

win(){ 
    if(this.game.score.videoNumber === 30 || (this.clipsArray === [] && this.audioArray === [])) { 
        this.game.end = true;
        this.winDraw(); 
    }
}

winDraw() { 
        this.context.save();
        this.context.drawImage(this.winImg, 0, 0, 500, 450);
        this.context.restore();
}


reset () { 

    if(this.game.end === true){ 

        this.context.clearRect(0, 0, this.game.$canvas.width, this.game.$canvas.height);

        this.troll = [];
        this.video = [];
        this.coin = [];
        this.troll = [];
        this.video = [];
        this.coin = [];
        this.clipsArray = 

        ['screenshots/babymonkey.png',
        'screenshots/badger.png',
        'screenshots/britney.png', 
        'screenshots/charlie.png', 
        'screenshots/david.png', 
        'screenshots/dramatic.png', 
        'screenshots/evolution.png',
        'screenshots/father.png',
        'screenshots/friday.png',
        'screenshots/grape.png',
        'screenshots/hide.png',
        'screenshots/keyboard.png',
        'screenshots/no.png',
        'screenshots/nobody.png',
        'screenshots/numa.png',
        'screenshots/panda.png',
        'screenshots/potter.png',
        'screenshots/rick.png',
        'screenshots/shoes.png',
        'screenshots/turtles.png'];
        this.audioArray = 
    ['audio/babymonkey.mp3',
    'audio/badger.mp3',
    'audio/britney.mp3', 
    'audio/charlie.mp3',
    'audio/david.mp3',
    'audio/dramatic.mp3',
    'audio/evolution.mp3',
    'audio/father.mp3',
    'audio/friday.mp3',
    'audio/grape.mp3',
    'audio/hide.mp3',
    'audio/keyboard.mp3',
    'audio/no.mp3',
    'audio/nobody.mp3',
    'audio/numa.mp3',
    'audio/panda.mp3',
    'audio/potter.mp3',
    'audio/rick.mp3',
    'audio/shoes.mp3',
    'audio/turtles.mp3'
    ] 
    }
}
} 
