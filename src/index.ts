import { Sprite } from './classes/sprite.js';
import { Controller } from './classes/controller.js';
import { Fighter } from './classes/fighter.js';
import { Combat } from './classes/combat.js';

const appDiv: HTMLElement = document.getElementById('app');
const canvas: HTMLCanvasElement = document.querySelector('canvas');
const context = canvas.getContext('2d');
const defaultSettings = {
  canvasWidth: 1024,
  canvasHeight: 576,
  playerHeight: 150,
  enemyHeight: 150,
  playerStartingPos: 100,
  enemyStartingPos: 1024 - 100
};
const { canvasWidth, canvasHeight, playerHeight, enemyHeight,
        playerStartingPos, enemyStartingPos,
} = defaultSettings;

canvas.width = canvasWidth;
canvas.height = canvasHeight;
context.fillRect(0, 0, canvasWidth, canvasHeight);


const player1_controller = new Controller("player1");
const player2_controller = new Controller("player2");
const player = new Fighter({x:playerStartingPos, y:canvasHeight-playerHeight-300, height:playerHeight, width:30, polygon:[], controls: player1_controller});
const enemy = new Fighter({x:enemyStartingPos, y:canvasHeight-enemyHeight-300, height:enemyHeight, width:30, polygon:[], controls: player2_controller});
player.draw( context );
enemy.draw( context );
console.log(player);
const combat = new Combat( player, enemy );

const sailor_jupiter_sprite = new Image();
sailor_jupiter_sprite.src = "./dist/assets/sprites/jupiter.png";
const jupiter_sprite = new Sprite();





function gameLoop(){
    context.fillStyle = "black";
    context.fillRect(0, 0, canvasWidth, canvasHeight);
    player.update( canvas,context );
    enemy.update(canvas, context );
    jupiter_sprite.draw( context, sailor_jupiter_sprite, 0, 0, 45, 120, canvasHeight - 100, 100, 46, 120);
    combat.update();
    window.requestAnimationFrame( gameLoop );
}

gameLoop();