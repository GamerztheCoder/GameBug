"use strict";

let c = document.getElementById('pongTable');
const ctx = c.getContext('2d');

class Ball {
  create(ballX, ballY) {
    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.lineWidth = "1";
    ctx.strokeStyle = "black";
    ctx.fillRect(ballX, ballY, 10, 10);
    ctx.stroke();
  }
}
class Paddles {
  create(paddleType, x, y) {
    if (paddleType === "Left") {
      ctx.fillStyle = "white";
      ctx.beginPath();
      ctx.lineWidth = "6";
      ctx.strokeStyle = "white";
      ctx.fillRect(x, y, 10, 85);
      ctx.stroke();
    } else if (paddleType === "Right") {
      ctx.beginPath();
      ctx.fillStyle = "white";
      ctx.lineWidth = "1";
      ctx.strokeStyle = "black";
      ctx.fillRect(x, y, 10, 85);
      ctx.stroke();
    }
  }
}

let paddle = new Paddles();
let ball = new Ball();
const speed = 2;
let yBounce = 0;
let xBounce = 0;
let ballXandY = [290, 240];
let paddleY = 200;
let rpaddleY = 200;
let ballDimension = {
  x: ballXandY[0],
  y: ballXandY[1],
  height: 10,
  width: 10,
};
let leftPaddleDimension = {
  x: 30,
  y: paddleY,
  width: 10,
  height: 85,
};
let rightPaddleDimension = {
  x: 500,
  y: rpaddleY,
  width: 10,
  height: 85,
};

function resetCanvas() {
  ctx.clearRect(0, 0, 550, 500);
  paddle.create("Left", 30, paddleY);
  paddle.create("Right", 500, rpaddleY);
  ball.create(ballXandY[0], ballXandY[1]);
}

function isCollide(ballItem, leftPaddleItem, rightPaddleItem) {
  if (
    ballItem.x + ballItem.width >= leftPaddleItem.x &&
    ballItem.x <= leftPaddleItem.x + leftPaddleItem.width &&
    ballItem.y + ballItem.height >= leftPaddleItem.y &&
    ballItem.y <= leftPaddleItem.y + leftPaddleItem.height
  ) {
    return true
  } else if (
    ballItem.x + ballItem.width >= rightPaddleItem.x &&
    ballItem.x <= rightPaddleItem.x + rightPaddleItem.width &&
    ballItem.y + ballItem.height >= rightPaddleItem.y &&
    ballItem.y <= rightPaddleItem.y + rightPaddleItem.height
  ) {
    return true
  } else {
    return false
  };
};

function updateBall() {
  let collide = isCollide(ballDimension, leftPaddleDimension, rightPaddleDimension);
  if (collide) {
    xBounce = (xBounce + 1) % 2
  };
  if (ballXandY[0] <= 0) {
    ballXandY[0] = 290;
    ballXandY[1] = 240;
    document.getElementById('player1Points').innerHTML = Number(document.getElementById('player1Points').innerHTML) + 1
  }
  if (ballXandY[0] >= 540) {
    ballXandY[0] = 290;
    ballXandY[1] = 240;
    document.getElementById('player0Points').innerHTML = Number(document.getElementById('player0Points').innerHTML) + 1
  }
  if (ballXandY[1] <= 0) {
    yBounce = 1
  }
  if (ballXandY[1] >= 490) {
    yBounce = 0;
  }
  if (xBounce === 0) {
    ballXandY[0] -= speed;
    ballDimension.x = ballXandY[0]
  } else {
    ballXandY[0] += speed;
    ballDimension.x = ballXandY[0]
  }
  if (yBounce === 0) {
    ballXandY[1] -= speed;
    ballDimension.y = ballXandY[1]
  } else {
    ballXandY[1] += speed;
    ballDimension.y = ballXandY[1]
  }
}

function startGame() {
  document
    .getElementById("startInstruction")
    .classList.replace("shown", "hidden");
  document.getElementById("pongTable").classList.replace("hidden", "shown");
  document.getElementById('scoreBoard').classList.replace('hidden', 'shown');
  resetCanvas();
  document.addEventListener("keydown", function (event) {
    if (event.code === "KeyW") {
      paddleY -= 10;
      if (paddleY <= 0) {
        paddleY = 0;
      }
      leftPaddleDimension.y = paddleY
      resetCanvas();
    } else if (event.code === "KeyS") {
      paddleY += 10;
      if (paddleY >= 420) {
        paddleY = 420;
      }
      leftPaddleDimension.y = paddleY
      resetCanvas();
    }
  });
  document.addEventListener("keydown", function (event) {
    if (event.code === "ArrowUp") {
      rpaddleY -= 10;
      if (rpaddleY <= 0) {
        rpaddleY = 0;
      }
      rightPaddleDimension.y = rpaddleY
      resetCanvas();
    }
    if (event.code === "ArrowDown") {
      rpaddleY += 10;
      if (rpaddleY >= 420) {
        rpaddleY = 420;
      }
      rightPaddleDimension.y = rpaddleY
      resetCanvas();
    }
  });
}

function startBall() {
  setTimeout(function () {
    setInterval(function () {
      updateBall();
      resetCanvas();
  }, 12);
  }, 1000)
  
}
