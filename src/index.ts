import { Sprite } from './classes/sprite.js';
import { Controller } from './classes/controller.js';

const appDiv: HTMLElement = document.getElementById('app');
const canvas: HTMLCanvasElement = document.querySelector('canvas');
const context = canvas.getContext('2d');
const defaultSettings = {
  canvasWidth: 1024,
  canvasHeight: 576,
};
const { canvasWidth, canvasHeight } = defaultSettings;

canvas.width = canvasWidth;
canvas.height = canvasHeight;
context.fillRect(0, 0, canvasWidth, canvasHeight);

const player = new Sprite({x:0, y:0, height:10, width:30, polygon:[]});
const enemy = new Sprite({x:0, y:0, height:10, width:30, polygon:[]});
const player1_controls = new Controller("player1", player);
const player2_controls = new Controller("player2", enemy);
player.draw( context );
enemy.draw( context );

function gameLoop(){
    context.fillStyle = "black";
    context.fillRect(0, 0, canvasWidth, canvasHeight);
    player.update( canvas,context );
    enemy.update(canvas, context );
    window.requestAnimationFrame( gameLoop );
}

gameLoop();