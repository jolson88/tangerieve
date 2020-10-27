import React from 'react';
import Header from './Header';
import Sketch from './sketches/Sketch';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />      
      <Sketch />
    </div>
  );
}

export default App;
