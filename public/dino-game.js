// Dino Game - Offline Entertainment
class DinoGame {
  constructor() {
    this.canvas = document.getElementById('gameCanvas');
    this.ctx = this.canvas.getContext('2d');
    this.startBtn = document.getElementById('startBtn');
    this.restartBtn = document.getElementById('restartBtn');
    this.exitBtn = document.getElementById('exitBtn');
    this.intro = document.getElementById('intro');
    this.gameInfo = document.getElementById('gameInfo');
    this.gameOver = document.getElementById('gameOver');
    this.scoreElement = document.getElementById('score');
    this.finalScoreElement = document.getElementById('finalScore');
    this.instructionsElement = document.getElementById('instructions');

    // Game variables
    this.gameRunning = false;
    this.gameSpeed = 5;
    this.gravity = 0.6;
    this.score = 0;

    // Dino object
    this.dino = {
      x: 50,
      y: 0,
      width: 40,
      height: 50,
      dy: 0,
      jumpPower: -12,
      grounded: false,
      color: '#8FC47B'
    };

    // Ground
    this.ground = {
      y: this.canvas.height - 20,
      height: 20,
      color: '#A3A3A3'
    };

    // Arrays
    this.obstacles = [];
    this.clouds = [];
    this.obstacleTimer = 0;
    this.obstacleInterval = 100;

    // Load T-Rex image
    this.dinoImage = new Image();
    this.dinoImage.src = 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Chromium_T-Rex-error-offline.svg';
    this.imageLoaded = false;
    this.dinoImage.onload = () => {
      this.imageLoaded = true;
    };

    this.initEventListeners();
    this.resizeCanvas();
  }

  initEventListeners() {
    this.startBtn.addEventListener('click', () => this.startGame());
    this.restartBtn.addEventListener('click', () => this.startGame());
    this.exitBtn.addEventListener('click', () => this.exitGame());

    document.addEventListener('keydown', (e) => {
      if (e.code === 'Space' || e.code === 'ArrowUp') {
        e.preventDefault();
        if (!this.gameRunning && !this.gameOver.classList.contains('active')) {
          this.startGame();
        } else {
          this.jump();
        }
      }
    });

    this.canvas.addEventListener('click', () => this.jump());
    this.canvas.addEventListener('touchstart', (e) => {
      e.preventDefault();
      this.jump();
    });

    window.addEventListener('resize', () => this.resizeCanvas());
  }

  init() {
    this.dino.y = this.ground.y - this.dino.height;
    this.dino.dy = 0;
    this.dino.grounded = false;
    this.obstacles = [];
    this.clouds = [];
    this.score = 0;
    this.gameSpeed = 5;
    this.obstacleTimer = 0;

    // Create initial clouds
    for (let i = 0; i < 3; i++) {
      this.clouds.push({
        x: Math.random() * this.canvas.width,
        y: 20 + Math.random() * 60,
        width: 60 + Math.random() * 40,
        height: 20
      });
    }
  }

  startGame() {
    this.init();
    this.gameRunning = true;
    this.intro.style.display = 'none';
    this.canvas.classList.add('active');
    this.gameInfo.classList.add('active');
    this.instructionsElement.style.display = 'block';
    this.gameOver.classList.remove('active');
    this.gameLoop();
  }

  endGame() {
    this.gameRunning = false;
    this.instructionsElement.style.display = 'none';
    this.gameOver.classList.add('active');
    const displayScore = Math.floor(this.score / 10);
    this.finalScoreElement.textContent = `Score: ${displayScore}`;
  }

  exitGame() {
    this.gameRunning = false;
    this.canvas.classList.remove('active');
    this.gameInfo.classList.remove('active');
    this.gameOver.classList.remove('active');
    this.instructionsElement.style.display = 'block';
    this.intro.style.display = 'block';
  }

  jump() {
    if (this.dino.grounded && this.gameRunning) {
      this.dino.dy = this.dino.jumpPower;
      this.dino.grounded = false;
    }
  }

  updateDino() {
    this.dino.dy += this.gravity;
    this.dino.y += this.dino.dy;

    if (this.dino.y + this.dino.height >= this.ground.y) {
      this.dino.y = this.ground.y - this.dino.height;
      this.dino.dy = 0;
      this.dino.grounded = true;
    }
  }

  createObstacle() {
    const size = 20 + Math.random() * 30;
    this.obstacles.push({
      x: this.canvas.width,
      y: this.ground.y - size,
      width: size,
      height: size,
      color: '#b56b36'
    });
  }

  updateObstacles() {
    this.obstacleTimer++;

    if (this.obstacleTimer > this.obstacleInterval) {
      this.createObstacle();
      this.obstacleTimer = 0;
      this.obstacleInterval = 60 + Math.random() * 80;
    }

    this.obstacles = this.obstacles.filter(obstacle => {
      obstacle.x -= this.gameSpeed;
      return obstacle.x + obstacle.width > 0;
    });

    if (this.score % 100 === 0 && this.score > 0) {
      this.gameSpeed += 0.1;
    }
  }

  updateClouds() {
    this.clouds.forEach(cloud => {
      cloud.x -= this.gameSpeed * 0.3;

      if (cloud.x + cloud.width < 0) {
        cloud.x = this.canvas.width + Math.random() * 100;
        cloud.y = 20 + Math.random() * 60;
      }
    });
  }

  checkCollision() {
    for (let obstacle of this.obstacles) {
      if (
        this.dino.x < obstacle.x + obstacle.width &&
        this.dino.x + this.dino.width > obstacle.x &&
        this.dino.y < obstacle.y + obstacle.height &&
        this.dino.y + this.dino.height > obstacle.y
      ) {
        this.endGame();
        break;
      }
    }
  }

  updateScore() {
    this.score++;
    this.scoreElement.textContent = `Score: ${Math.floor(this.score / 10)}`;
  }

  drawDino() {
    if (this.imageLoaded) {
      // Draw the actual Chrome T-Rex image (larger size)
      const imgWidth = this.dino.width * 2.5; // Increased from 1.5 to 2.5
      const imgHeight = this.dino.height * 2.2; // Increased from 1.1 to 2.2
      
      // Adjust Y position to keep feet on ground (since image is taller)
      const imgX = this.dino.x - 10;
      const imgY = this.dino.y - (imgHeight - this.dino.height); // Shift up by extra height
      
      // Save context state
      this.ctx.save();
      
      // Draw the image
      this.ctx.drawImage(
        this.dinoImage,
        imgX,
        imgY,
        imgWidth,
        imgHeight
      );
      
      // Apply green color overlay
      this.ctx.globalCompositeOperation = 'source-atop';
      this.ctx.fillStyle = this.dino.color; // #8FC47B
      this.ctx.fillRect(
        imgX,
        imgY,
        imgWidth,
        imgHeight
      );
      
      // Restore context state
      this.ctx.restore();
    } else {
      // Fallback: simple rectangle while image loads
      this.ctx.fillStyle = this.dino.color;
      this.ctx.fillRect(this.dino.x, this.dino.y, this.dino.width, this.dino.height);
    }
  }

  drawGround() {
    this.ctx.fillStyle = this.ground.color;
    this.ctx.fillRect(0, this.ground.y, this.canvas.width, this.ground.height);

    // Ground line pattern
    this.ctx.strokeStyle = '#585958';
    this.ctx.lineWidth = 2;
    for (let i = 0; i < this.canvas.width; i += 20) {
      this.ctx.beginPath();
      this.ctx.moveTo(i - (this.score % 20), this.ground.y);
      this.ctx.lineTo(i - (this.score % 20) + 10, this.ground.y);
      this.ctx.stroke();
    }
  }

  drawObstacles() {
    this.obstacles.forEach(obstacle => {
      this.ctx.fillStyle = obstacle.color;
      this.ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);

      // Add cactus details
      this.ctx.fillRect(obstacle.x - 5, obstacle.y + 10, 5, 10);
      if (obstacle.width > 25) {
        this.ctx.fillRect(obstacle.x + obstacle.width, obstacle.y + 8, 5, 12);
      }
    });
  }

  drawClouds() {
    this.ctx.fillStyle = '#585958';
    this.clouds.forEach(cloud => {
      this.ctx.fillRect(cloud.x, cloud.y, cloud.width, cloud.height);
      this.ctx.fillRect(cloud.x + 10, cloud.y - 10, cloud.width - 20, cloud.height);
      this.ctx.fillRect(cloud.x + 20, cloud.y - 15, cloud.width - 40, cloud.height);
    });
  }

  gameLoop() {
    if (!this.gameRunning) return;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Update
    this.updateDino();
    this.updateObstacles();
    this.updateClouds();
    this.updateScore();
    this.checkCollision();

    // Draw
    this.drawClouds();
    this.drawGround();
    this.drawObstacles();
    this.drawDino();

    requestAnimationFrame(() => this.gameLoop());
  }

  resizeCanvas() {
    const maxWidth = Math.min(800, window.innerWidth - 40);
    this.canvas.width = maxWidth;
    this.canvas.style.width = maxWidth + 'px';

    if (maxWidth < 600) {
      this.canvas.height = 150;
      this.ground.y = this.canvas.height - 20;
      this.dino.height = 35;
      this.dino.width = 28;
    }
  }
}

// Initialize game when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new DinoGame();
});
