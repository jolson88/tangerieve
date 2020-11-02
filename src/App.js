import React from 'react';
import Header from './Header';

import { PixelSketch, Sketches } from './sketches/PixelSketch';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />          
      <main style={{ margin: '10pt' }}>
        <PixelSketch width="400" height="400" sketch={ Sketches.SET_PIXEL } />
        <PixelSketch width="400" height="400" sketch={ Sketches.COLOR_LERP } />
        <PixelSketch width="400" height="400" sketch={ Sketches.XSQUARED_YSQUARED } />
      </main>
    </div>
  );
}

export default App;
