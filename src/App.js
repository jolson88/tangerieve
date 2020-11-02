import React from 'react';
import Header from './Header';

import { PixelSketch, Sketches } from './sketches/PixelSketch';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />      
      <PixelSketch sketch={ Sketches.XSQUARED_YSQUARED } />
    </div>
  );
}

export default App;
