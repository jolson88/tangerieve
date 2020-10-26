import React, { useEffect } from 'react';
import { range } from 'ramda';

import './App.css';

function Sketch() {
  const canvasRef = React.createRef();
  const gradients = 12;
  const colorRange = 180; // How much of the 0-255 should be used for colors
  const colorOffset = 50; // The value the first color should start at
  const colorStride = colorRange / gradients; // The value each color should be offset by in the gradient
  const colorLookup = range(0, gradients).map(i => i * colorStride + colorOffset);

  useEffect(() => {
    const w = canvasRef.current.width;
    const h = canvasRef.current.height;
    const stride = 4; // each pixel has 4 integers: R, G, B, and A
    const ctx = canvasRef.current.getContext('2d');
    let pixels = ctx.createImageData(w, h);

    for (let y = 0; y < w; y++) {
      for (let x = 0; x < h; x++) {
        const i = (x + 1) + ((x + 1) / w);
        const j = (y + 1) + ((y + 1) / h); 
        const v = Math.round(i * i + j * j);

        const color = colorLookup[v % gradients];
        const idx = (y * h * stride) + (x * stride);
        pixels.data[idx] = color;
        pixels.data[idx+1] = color;
        pixels.data[idx+2] = color;
        pixels.data[idx+3] = 255;
      }
    }
    ctx.putImageData(pixels, 0, 0);
  }, [colorLookup, canvasRef]);

  return (
    <div style={{ margin: '10pt' }}>
      <canvas className="Sketch" width="400" height="400" ref={canvasRef} />
    </div>
  );
}

function Header() {
  return (
    <header>
      <div>Tangerieve - Generative Art Experiments</div>
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
