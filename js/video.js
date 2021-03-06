class Video {
  constructor(game) {
    this.height = game.height;
    this.width = game.width;
    this.context = game.context;
    this.objectWidth = 50;
    this.objectHeight = 50;
    this.y = this.height;
    this.x = Math.floor((Math.random() * this.width-50) + 10);
    this.vy = -3;
    this.vx = -3;
    this.img = new Image();
    this.img.src = 'images/red.png';
  }

  draw() {
    this.context.save();
    this.context.drawImage(this.img, this.x, this.y, this.objectWidth, this.objectHeight);
    this.context.restore();
  } 

    update() {
      this.y += this.vy;
    }

}
