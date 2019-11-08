class Background {
      constructor(game) {
          //mainCanvas 
          this.height = game.height
          this.width = game.width
          this.context = game.context
          this.y = 0;
          this.x = 0;
          this.img = new Image();
          this.img.src = "images/back4canvas.png";
       
      }

draw() {
          this.context.drawImage(this.img, this.x, this.y, this.width, this.height);
      }
  }