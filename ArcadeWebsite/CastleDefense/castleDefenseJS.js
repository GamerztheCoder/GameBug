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

render(side) {
  if(side == 'left'){
  ctx.fillStyle = "gray"; // Set fill color for the body
  ctx.fillRect(this.x + 30, this.y, this.width - 60, this.height - 30); // Draw the body

  ctx.fillStyle = "black"; // Set fill color for the head
  ctx.beginPath();
  ctx.arc(this.x + this.width/2, this.y - this.height/2 + 30, this.width/4, 0, Math.PI * 2); // Draw the head
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "brown"; // Set fill color for the gun
  ctx.fillRect(this.x - this.width/4 + 30, this.y + this.height/4 - 15, this.width/2 - 30, this.height/2 - 30); // Draw the gun

  ctx.fillStyle = "black"; // Set fill color for the gun barrel
  ctx.fillRect(this.x - this.width/4 + 10, this.y - this.height/2 + 53, this.width/2, this.height/8); // Draw the gun barrel
  }
  if(side=='right'){
    ctx.fillStyle = "gray"; // Set fill color for the body
  ctx.fillRect(this.x + 30, this.y, this.width - 60, this.height - 30); // Draw the body

  ctx.fillStyle = "black"; // Set fill color for the head
  ctx.beginPath();
  ctx.arc(this.x + this.width/2, this.y - this.height/2 + 30, this.width/4, 0, Math.PI * 2); // Draw the head
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "brown"; // Set fill color for the gun
  ctx.fillRect(this.x - this.width/4 + 80, this.y + this.height/4 - 15, this.width/2 - 30, this.height/2 - 30); // Draw the gun

  ctx.fillStyle = "black"; // Set fill color for the gun barrel
  ctx.fillRect(this.x - this.width/4 + 70, this.y - this.height/2 + 53, this.width/2, this.height/8); // Draw the gun barrel
  }
}
}

// Create a Gunman instance
const gunman1 = new Gunman(150, 200, 80, 100);
const gunman2 = new Gunman(400, 200, 80, 100);

// Render the gunman on the canvas
gunman1.render('left');
gunman2.render('right');