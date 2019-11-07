class Troll {
  constructor(game) {
    this.context = game.context;
    this.game = game;
    this.height = game.height;
    this.width = game.width;
    this.objectWidth = 60;
    this.objectHeight = 60;

    this.x = Math.floor((Math.random() * this.width) + 10);
    this.y = this.height;
   
    // this.trollTwoX = this.width;
    // this.trollTwoY = Math.floor((Math.random() * this.height) + 10);



    this.vy = -5;
    this.vx = -5;
 

    this.img = new Image();
    this.img.src = `images/trollface.png`;

  }

  draw() {
    this.context.save();
    this.context.drawImage(this.img, this.x, this.y, this.objectWidth, this.objectHeight);
    this.context.restore();
  }

  // drawTrollTwo(){ 
  //   this.context.save();
  //   this.context.drawImage(this.img, this.x, this.y, this.objectWidth, this.objectHeight);
  //   this.context.restore();
  // }

  update() {
    this.y += this.vy;
    this.game.trollSpeed -= 0.03;
  }
  
  // updateTrollTwo(){ 
  //   this.trollTwoX += this.vx;
  //   this.game.trollSpeed -=0.01;
  // }
}