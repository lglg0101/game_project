  class Background {
      constructor(game) {
          //mainCanvas 
          this.height = game.height
          this.width = game.width
          this.context = game.context
          this.y = 0;
          this.x = 0;
          this.img = new Image();
          this.img.src = "images/canvasbg3.png"

        //displayCanvas
        this.displayWidth = game.displayWidth;
        this.displayHeight = game.displayHeight;
        this.displayContext = game.displayContext
        this.displayX = 0;
        this.displayY = 0;
        this.displayImg = new Image();
        this.displayImg.src = "images/quicktime.png"
      }

//both backgrounds
      draw() {
          this.context.drawImage(this.img, this.x, this.y, this.width, this.height);

        this.displayContext.drawImage(this.displayImg, this.displayX, this.displayY, this.displayWidth, this.displayHeight);
      }

// //scrolling effect
//       update() {
//           this.y += this.velocityY;
//           if (this.y < -this.height) this.y = 0;
//       }
  }