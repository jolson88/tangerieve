import React from 'react';
import Header from './Header';

import { PixelSketch, Sketches } from './sketches/PixelSketch';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />      
      <PixelSketch sketch={ Sketches.COLOR_LERP } />
    </div>
  );
}

export default App;
