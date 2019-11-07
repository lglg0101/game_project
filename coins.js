class Coin { 
        constructor(game) { 
          this.height = game.height;
          this.width = game.width;
          this.objectWidth = 30;
          this.objectHeight = 30; 
          this.context = game.context;
          this.y = Math.floor((Math.random() * this.width) + 10);
          this.x = Math.floor((Math.random() * this.width) + 10);
          this.vy = -4;
          this.vx = -1;
          this.score = 100; 
          this.img = new Image();
          this.img.src = `images/coin.png`;
        }
    
        draw() {
        this.context.save();
        this.context.drawImage(this.img, this.x, this.y, this.objectWidth, this.objectHeight);
        this.context.restore();
    
        }
    
        updateScore(){ 
          this.score -= 10;
        }
       
        update() {
          this.y += this.vy;
        }
      }