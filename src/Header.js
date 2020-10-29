import React from 'react';

import './Header.scss';
import logo from './logo.svg';

function Header() {
  return (
    <header className="siteHeader">
      <img className="logo" src={logo} alt="logo" />
      <h1>Exploring generative art concepts</h1>
      <nav>
        <a href="#Simple">Simple</a>
        <a href="#Animated">Animated</a>
        <a href="#Mathematical">Mathematical</a>
      </nav>
    </header>
  );
}

export default Header;
