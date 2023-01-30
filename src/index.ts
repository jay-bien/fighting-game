import { Sprite } from './classes/sprite.js';

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
player.draw( context );
enemy.draw( context );

function gameLoop(){
    console.log("Loop");
    player.move();
    player.draw( context );
    enemy.move();
    enemy.draw( context );
    window.requestAnimationFrame( gameLoop );
}

gameLoop();