import React from 'react';
import * as R from 'ramda';

import './Sketch.scss';
import { usePixels } from './usePixels';

const Sketches = {
  SET_PIXEL: 0,
  COLOR_LERP: 1,
  XSQUARED_YSQUARED: 2,
}

let sketchLookup = [];
sketchLookup[Sketches.SET_PIXEL] = createSetPixelSketch();
sketchLookup[Sketches.COLOR_LERP] = createColorLerp();
sketchLookup[Sketches.XSQUARED_YSQUARED] = createXSquaredYSquaredSketch();

function createSetPixelSketch() {
  return (width, height, setPixel) => {
    R.xprod(R.range(0, width), R.range(0, height)).forEach(([x, y]) => {
      const mod = (x % 2 + y % 2) % 2;
      const [r, g, b] = (mod === 0) ? [255, 0, 0] : [0, 255, 0];
      setPixel(x, y, r, g, b);
    });
  }
}

function createColorLerp() {
  return (width, height, setPixel) => {
    R.xprod(R.range(0, width), R.range(0, height)).forEach(([x, y]) => {
      const r = Math.floor((x / width) * 255);
      const g = Math.floor((y / height) * 255);
      setPixel(x, y, r, g, 0, 255);
    });
  }
}

function createXSquaredYSquaredSketch() {
  const gradients = 12;
  const colorRange = 180; // How much of the 0-255 should be used for colors
  const colorOffset = 50; // The value the first color should start at
  const colorStride = colorRange / gradients; // The value each color should be offset by in the gradient
  const colorLookup = R.range(0, gradients).map(i => i * colorStride + colorOffset);

  return (width, height, setPixel) => {
    R.xprod(R.range(0, width), R.range(0, height)).forEach(([x, y]) => {
      const i = (x + 1) + ((x + 1) / width);
      const j = (y + 1) + ((y + 1) / height); 
      const v = Math.round(i * i + j * j);
      const color = colorLookup[v % gradients];
      setPixel(x, y, color, color, color);
    });
  };
}

function PixelSketch(props) {
  const canvasRef = React.createRef();
  const sketch = sketchLookup[props.sketch];

  usePixels(canvasRef, sketch);

  return (
    <main style={{ margin: '10pt' }}>
      <canvas className="Sketch" width="400" height="400" ref={canvasRef} />
    </main>
  );
}

export {
  PixelSketch,
  Sketches,
}
