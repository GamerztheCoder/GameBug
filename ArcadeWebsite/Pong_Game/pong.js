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
let ballDimension = {
  x: 290,
  y: 240,
  height: 10,
  width: 10,
};
let leftPaddleDimension = {
  x: 30,
  y: 200,
  width: 10,
  height: 85,
};
let rightPaddleDimension = {
  x: 500,
  y: 200,
  width: 10,
  height: 85,
};

function resetCanvas() {
  ctx.clearRect(0, 0, 550, 500);
  paddle.create("Left", 30, leftPaddleDimension.y);
  paddle.create("Right", 500, rightPaddleDimension.y);
  ball.create(ballDimension.x, ballDimension.y);
}

function isColliding(ballItem, leftPaddleItem, rightPaddleItem) {
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
  let collide = isColliding(ballDimension, leftPaddleDimension, rightPaddleDimension);
  if (collide) {
    xBounce = (xBounce + 1) % 2
  };
  if (ballDimension.x <= 0) {
    ballDimension.x = 290;
    ballDimension.y = 240;
    document.getElementById('player1Points').innerHTML = Number(document.getElementById('player1Points').innerHTML) + 1
  }
  if (ballDimension.x >= 540) {
    ballDimension.x = 290;
    ballDimension.y = 240;
    document.getElementById('player0Points').innerHTML = Number(document.getElementById('player0Points').innerHTML) + 1
  }
  if (ballDimension.y <= 0) {
    yBounce = 1
  }
  if (ballDimension.y >= 490) {
    yBounce = 0;
  }
  if (xBounce === 0) {
    ballDimension.x -= speed;
  } else {
    ballDimension.x += speed;
  }
  if (yBounce === 0) {
    ballDimension.y -= speed;
  } else {
    ballDimension.y += speed;
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
      leftPaddleDimension.y -= 10;
      if (leftPaddleDimension.y <= 0) {
        leftPaddleDimension.y = 0;
      }
      resetCanvas();
    } else if (event.code === "KeyS") {
      leftPaddleDimension.y += 10;
      if (leftPaddleDimension.y >= 420) {
        leftPaddleDimension.y = 420;
      }
      resetCanvas();
    }
  });
  document.addEventListener("keydown", function (event) {
    if (event.code === "ArrowUp") {
      rightPaddleDimension.y -= 10;
      if (rightPaddleDimension.y <= 0) {
        rightPaddleDimension.y = 0;
      }
      resetCanvas();
    }
    if (event.code === "ArrowDown") {
      rightPaddleDimension.y += 10;
      if (rightPaddleDimension.y >= 420) {
        rightPaddleDimension.y = 420;
      }
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
