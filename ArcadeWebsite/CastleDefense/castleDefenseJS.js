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

}

let gunmen = [];
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
  let gunman = new Gunman(event.clientX-666, event.clientY-160, 15, 15, 50);
  if(isCollidingWithSeeingArc(gunman, gunmen)){
    console.log('cannot place there')
  }else{
    gunmen.push(gunman)
    gunman.render()
  }
  console.log(gunmen)
});