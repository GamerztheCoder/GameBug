"use strict";

const c = document.getElementById('castleBoard');
const ctx = c.getContext('2d');

// Define the Gunman class
class Gunman {
constructor(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

render() {
  ctx.fillStyle = "gray"; // Set fill color for the body
  ctx.fillRect(this.x, this.y, this.width, this.height); // Draw the body

  ctx.fillStyle = "black"; // Set fill color for the head
  ctx.beginPath();
  ctx.arc(this.x + this.width/2, this.y - this.height/2, this.width/4, 0, Math.PI * 2); // Draw the head
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "brown"; // Set fill color for the gun
  ctx.fillRect(this.x - this.width/4, this.y + this.height/4, this.width/2, this.height/2); // Draw the gun

  ctx.fillStyle = "black"; // Set fill color for the gun barrel
  ctx.fillRect(this.x - this.width/4, this.y - this.height/2, this.width/2, this.height/8); // Draw the gun barrel
}
}

// Create a Gunman instance
const gunman = new Gunman(250, 400, 100, 150);

// Render the gunman on the canvas
gunman.render();