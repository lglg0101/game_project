class Clips {
    constructor(game) {
        this.game = game;
        this.still;
        this.array = [1, 2];

        this.image = "";
        this.imageToDraw = new Image ();
        this.imageToDraw.src; 
        

        //clips background 
        this.displayContext = game.displayContext;
        this.displayWidth = game.displayWidth;
        this.displayHeight = game.displayHeight;
        this.displayX = 20;
        this.displayY = 0;
        this.displayImg = new Image();
        this.displayImg.src = "images/quicktime.png"
        

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
        'screenshots/nobody.png',
        'screenshots/numa.png',
        'screenshots/panda.png',
        'screenshots/potter.png',
        'screenshots/turtles.png']
    
        this.audioArray = 
        ['audio/babymonkey.mp3',
        'audio/badger.mp3',
        'audio/britney.mp3', 
        'audio/charlie.mp3',
    ]
            
        //     {   still: { 
        //         image: 'screenshots/babymonkey.png',
        //         audio: 'audio/babymonkey.mp3'
        //     }
        //     },
        //     {
        //         image: 'screenshots/badger.png',
        //         audio: 'audio/badger.mp3'
        //     },
        //     {
        //         image: 'screenshots/britney.png',
        //         audio: 'audio/britney.mp3'
        //     },
        //     {
        //         image: 'screenshots/charlie.png',
        //         audio: 'audio/charlie.mp3'
        //     }, 
        //     {
        //         image: 'screenshots/david.png',
        //         audio: 'audio/david.mp3'
        //     },
        //     {
        //         image: 'screenshots/david.png',
        //         audio: 'audio/david.mp3'
        //     },
        //     {
        //         image: 'screenshots/dramatic.png',
        //         audio: 'audio/dramatic.mp3'
        //     },
        // ]

        // this.image;
        // this.image.src;

    }

    // getVideoAttribute(index) {
    //     console.log(index)

    //     switch (index) {
    //         case 1:

    //             this.still = {
    //                 image: 'screenshots/babymonkey.png',
    //                 audio: 'audio/babymonkey.mp3'
    //             }
    //             break;

    //         case 2:
    //             this.still = {
    //                 image: 'screenshots/badger.png',
    //                 audio: 'audio/badger.mp3'
    //             }
    //         default:
    //             this.still = {
    //                 image: 'screenshots/babymonkey.png',
    //                 audio: 'audio/babymonkey.mp3'

    //             }
    //     }


// drawClipsBackground () { 

//     this.displayContext.drawImage(this.displayImg, this.displayX, this.displayY, this.displayWidth, this.displayHeight);

// }

getRandomSrc() {
    this.clipsArray[Math.floor(Math.random()*this.clipsArray.length)];

    // this.image = i
    // // this.clipsArray.splice(i,1);
    // this.imageToDraw.src = this.image; 
    // console.log(this.imageToDraw.src);
    }


draw() {
        this.getRandomSrc();
        this.game.displayContext.drawImage(this.imageToDraw, 0, 0, 200, 200);
    }
} 

    // srcRandomizer() {
    // for(let i = 0; i < this.clipsArray.length; i ++){ 
    //     return this.array.image[i][Math.floor(Math.random * this.clipsArray.length)]
