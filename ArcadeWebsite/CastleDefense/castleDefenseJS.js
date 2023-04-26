"use strict";

const c = document.getElementById('castleBoard');
const ctx = c.getContext('2d');

// Define the Gunman class
class Gunman {
constructor(x, y, width, height, sightRadius,) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.sightRadius = sightRadius;
}

render() {
  ctx.fillStyle = "gray"; // Set fill color for the body
  ctx.fillRect(this.x+3, this.y, this.width/3, this.height); // Draw the body

  ctx.fillStyle = "black"; // Set fill color for the head
  ctx.beginPath();
  ctx.arc(this.x + this.width/2.7, this.y - this.height/5, this.width/4, 0, Math.PI * 2); // Draw the head
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "brown"; // Set fill color for the gun
  ctx.fillRect(this.x - this.width/12, this.y + this.height/8, this.width/5, this.height/3); // Draw the gun

  ctx.fillStyle = "black"; // Set fill color for the gun barrel
  ctx.fillRect(this.x - this.width/4, this.y - this.height/60, this.width/1.4, this.height/8); // Draw the gun barrel

  ctx.beginPath();
  ctx.arc(this.x + 5, this.y, this.sightRadius, 0, Math.PI * 2);
  ctx.globalAlpha = 0.3;
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.globalAlpha = 1;
  ctx.closePath();
}

pathBuilder() {
  const rect = c.getBoundingClientRect();
  ctx.beginPath();
  ctx.arc((this.x + 300) - rect.left + 5, (this.y + 140) - rect.top, this.sightRadius, 0, Math.PI * 2);
  ctx.fillStyle = "blanchedalmond";
  ctx.fill();
  ctx.closePath();
}
}

let gunmen = [];
let pathBlocks = {
  1: new Gunman(281, 11, 15, 15, 50),
  2: new Gunman(281, 26, 15, 15, 50),
  3: new Gunman(281, 34, 15, 15, 50),
  4: new Gunman(281, 44, 15, 15, 50),
  5: new Gunman(277, 61, 15, 15, 50),
  6: new Gunman(271, 20, 15, 15, 50),
  7: new Gunman(258, 84, 15, 15, 50),
  8: new Gunman(238, 94, 15, 15, 50),
  9: new Gunman(219, 100, 15, 15, 50),
  10: new Gunman(199, 101, 15, 15, 50),
  11: new Gunman(182, 103, 15, 15, 50),
  12: new Gunman(163, 104, 15, 15, 50),
  13: new Gunman(139, 107, 15, 15, 50),
  14: new Gunman(120, 108, 15, 15, 50),
  15: new Gunman(100, 110, 15, 15, 50),
  16: new Gunman(88, 120, 15, 15, 50),
  17: new Gunman(75, 131, 15, 15, 50),
  18: new Gunman(69, 147, 15, 15, 50),
  19: new Gunman(64, 169, 15, 15, 50),
  20: new Gunman(59, 196, 15, 15, 50),
  21: new Gunman(62, 209, 15, 15, 50),
  22: new Gunman(68, 225, 15, 15, 50),
  23: new Gunman(85, 244, 15, 15, 50),
  24: new Gunman(91, 250, 15, 15, 50),
  25: new Gunman(103, 262, 15, 15, 50),
  26: new Gunman(127, 273, 15, 15, 50),
  27: new Gunman(138, 280, 15, 15, 50),
  28: new Gunman(147, 291, 15, 15, 50),
  29: new Gunman(153, 303, 15, 15, 50),
  30: new Gunman(157, 319, 15, 15, 50),
  31: new Gunman(157, 337, 15, 15, 50),
  32: new Gunman(154, 359, 15, 15, 50),
  33: new Gunman(154, 376, 15, 15, 50),
  34: new Gunman(158, 410, 15, 15, 50),
  35: new Gunman(163, 430, 15, 15, 50),
  36: new Gunman(174, 439, 15, 15, 50),
  37: new Gunman(195, 454, 15, 15, 50),
  38: new Gunman(214, 460, 15, 15, 50),
  39: new Gunman(236, 466, 15, 15, 50),
  40: new Gunman(258, 468, 15, 15, 50),
  41: new Gunman(275, 471, 15, 15, 50),
  42: new Gunman(299, 471, 15, 15, 50),
  43: new Gunman(319, 470, 15, 15, 50),
  44: new Gunman(353, 461, 15, 15, 50),
  45: new Gunman(364, 455, 15, 15, 50),
  46: new Gunman(381, 445, 15, 15, 50),
  47: new Gunman(396, 433, 15, 15, 50),
  48: new Gunman(411, 419, 15, 15, 50),
  49: new Gunman(421, 404, 15, 15, 50),
  50: new Gunman(423, 391, 15, 15, 50),
  51: new Gunman(431, 368, 15, 15, 50),
  52: new Gunman(433, 353, 15, 15, 50),
  53: new Gunman(435, 336, 15, 15, 50),
  54: new Gunman(435, 314, 15, 15, 50),
  55: new Gunman(435, 292, 15, 15, 50),
  56: new Gunman(436, 279, 15, 15, 50),
  57: new Gunman(438, 265, 15, 15, 50),
  58: new Gunman(445, 243, 15, 15, 50),
  59: new Gunman(466, 225, 15, 15, 50),
  60: new Gunman(482, 217, 15, 15, 50),
  61: new Gunman(500, 213, 15, 15, 50),
  62: new Gunman(525, 210, 15, 15, 50),
  63: new Gunman(543, 210, 15, 15, 50),
  64: new Gunman(561, 210, 15, 15, 50),
  65: new Gunman(579, 210, 15, 15, 50),
  66: new Gunman(598, 212, 15, 15, 50),
  67: new Gunman(606, 213, 15, 15, 50),
};

for(let i = 1; i in pathBlocks; i++){
  pathBlocks[i].pathBuilder()
};

function isCollidingWithSeeingArc(gunman, allGunmen) {
  for (let i = 0; i < allGunmen.length; i++) {
    if (gunman === allGunmen[i]) {continue}; // Skip checking against itself
    let dx = allGunmen[i].x - gunman.x;
    let dy = allGunmen[i].y - gunman.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    let angle = Math.atan2(dy, dx);
    let halfFovAngle = gunman.sightRadius / 2;
    let angleDifference = Math.abs(angle - Math.atan2(gunman.y, gunman.x));
    if (distance <= gunman.sightRadius && angleDifference <= halfFovAngle) {
      return true; // Collision detected
    }
  }};

// Render the gunman on the canvas

c.addEventListener('mousedown', (event) => {
  const rect = c.getBoundingClientRect()
  let mouseX = event.clientX - rect.left
  let mouseY = event.clientY - rect.top
  let gunman = new Gunman(mouseX, mouseY, 15, 15, 50);
  if(isCollidingWithSeeingArc(gunman, gunmen)){
    console.log('cannot place there')
  }else{
    gunmen.push(gunman)
    gunman.render()
    console.log(gunmen)
  }
});