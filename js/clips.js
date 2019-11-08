class Clips {
  constructor(game) {
    this.game = game;
    // this.still;
    // this.array = [1, 2];

    this.image = "";
    this.imageToDraw = new Image();
    this.imageToDraw.src;

    // this.clipsArray = [];
    // this.audioArray = []

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
      new Audio('audio/rick.mp3'),
      new Audio('audio/no.mp3'),
      new Audio('audio/numa.mp3'),
      new Audio('audio/charlie.mp3'),
      new Audio('audio/keyboard.mp3'),
      new Audio('audio/evolution.mp3'),
      new Audio('audio/friday.mp3'),
      new Audio('audio/dramatic.mp3'),
      new Audio('audio/bacon.mp3'),
      new Audio('audio/david.mp3'),
      new Audio('audio/britney.mp3'),
      new Audio('audio/babymonkey.mp3'),
      new Audio('audio/potter.mp3'),
      new Audio('audio/father.mp3'),
      new Audio('audio/panda.mp3'),
      new Audio('audio/turtles.mp3'),
      new Audio('audio/badger.mp3'),
      new Audio('audio/hide.mp3'),
      new Audio('audio/nobody.mp3'),
      new Audio('audio/shoes.mp3')
    ]

    for (let audio of this.audioArray) {
      audio.load();
    }

  }
}