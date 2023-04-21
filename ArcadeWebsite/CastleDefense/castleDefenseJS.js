"use strict";

let c = document.getElementById('castleBoard');
const ctx = c.getContext('2d');

class Gunman {
    constructor(x, y, imageSrc, weapon, health) {
      this.x = x;
      this.y = y;
      this.image = new Image();
      this.image.src = imageSrc;
      this.weapon = weapon;
      this.health = health;
    }

    shoot(target) {
      console.log(`${this.name} shoots at ${target} with ${this.weapon}!`);
    }

    takeDamage(damage) {
      this.health -= damage;
      console.log(`${this.name} takes ${damage} damage. Health: ${this.health}`);
      if (this.health <= 0) {
        console.log(`${this.name} has been defeated!`);
      }
    }

    render(ctx) {
      ctx.drawImage(this.image, this.x, this.y);
    }
  }
  
  // Create a new instance of Gunman
  const gunmanImageSrc = "gunman.png"; // Replace with path to your gunman image
  const player = new Gunman(50, 50, gunmanImageSrc, "pistol", 100);

  // Render the gunman on the canvas
  player.image.onload = function() {
    ctx.drawImage(player.image, player.x, player.y);
  };