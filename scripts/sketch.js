/// <reference path="../node_modules/@types/p5/global.d.ts" />

const size = 600;
const gradients = 12;
let colorLookup = [];

function setup() {
  createCanvas(size, size);
  const colorRange = 180;
  const colorStride = colorRange / gradients;
  for (let i = 0; i < gradients; i++) {
    colorLookup.push(i * colorStride + 50);
  }
}

function draw() {
  background(230);

  loadPixels();
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const i = (x + 1) + ((x + 1) / size);
      const j = (y + 1) + ((y + 1) / size); 
      const v = floor(i * i + j * j);
      set(x, y, colorLookup[v % gradients]);
    }
  }
  updatePixels();
  noLoop();
}