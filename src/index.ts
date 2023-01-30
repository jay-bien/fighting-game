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

const player = new Sprite(0, 0, 10, 30, []);