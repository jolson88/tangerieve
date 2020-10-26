import React, { useEffect } from 'react';
import { range } from 'ramda';

import './App.css';

function usePixels(canvasRef, sketchFn) {
  const stride = 4;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const pixels = ctx.createImageData(canvas.width, canvas.height);
    sketchFn(canvas.width, canvas.height, function setPixel(x, y, r, g, b) {
      const idx = (y * canvas.height * stride) + (x * stride);
      pixels.data[idx] = r;
      pixels.data[idx+1] = g;
      pixels.data[idx+2] = b;
      pixels.data[idx+3] = 255;
    });
    ctx.putImageData(pixels, 0, 0);
  }, [canvasRef, sketchFn]);
}

function Sketch() {
  const canvasRef = React.createRef();
  const gradients = 12;
  const colorRange = 180; // How much of the 0-255 should be used for colors
  const colorOffset = 50; // The value the first color should start at
  const colorStride = colorRange / gradients; // The value each color should be offset by in the gradient
  const colorLookup = range(0, gradients).map(i => i * colorStride + colorOffset);

  usePixels(canvasRef, (width, height, setPixel) => {
    for (let y = 0; y < width; y++) {
      for (let x = 0; x < height; x++) {
        const i = (x + 1) + ((x + 1) / width);
        const j = (y + 1) + ((y + 1) / height); 
        const v = Math.round(i * i + j * j);

        const color = colorLookup[v % gradients];
        setPixel(x, y, color, color, color);
      }
    }
  })

  return (
    <div style={{ margin: '10pt' }}>
      <canvas className="Sketch" width="400" height="400" ref={canvasRef} />
    </div>
  );
}

function Header() {
  return (
    <header>
      <div>Tangerieve - Exploring generative art concepts</div>
      <Sketch />
    </header>
  );
}

function App() {
  return (
    <div className="App">
      <Header />      
    </div>
  );
}

export default App;
