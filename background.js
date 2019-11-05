  class Background {
      constructor(game) {
          this.height = game.height
          this.width = game.width
          this.context = game.context
          this.y = 0;
          this.velocityY = -0.5;
          this.x = 0;
          //   this.velocityX = -2;
          this.img = new Image();
        //   this.img.src = "images/canvasbg3.png"
      }

//two backgounds for scrolling effect
      draw() {
          this.context.drawImage(this.img, this.x, this.y, this.width, this.height);
          this.context.drawImage(this.img, this.x, this.y + this.height, this.width, this.height);
      }

//scrolling effect
      update() {
          this.y += this.velocityY;
          if (this.y < -this.height) this.y = 0;
      }
  }