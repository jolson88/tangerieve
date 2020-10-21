/// <reference path="../node_modules/@types/p5/global.d.ts" />
/// <reference path="../node_modules/@types/ramda/index.d.ts" />

const size = 600;
const colorRange = 180; // How much of the 0-255 should be used for colors
const colorOffset = 50; // The value the first color should start at
const colorStride = colorRange / gradients; // The value each color should be offset by in the gradient
const gradients = 12;
let colorLookup = [];

function setup() {
  createCanvas(size, size);
  colorLookup = R.range(0, gradients).map((i) => i * colorStride + colorOffset);
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