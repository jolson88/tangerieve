import React from 'react';

import './Header.scss';

function Header() {
  return (
    <header className="siteHeader">
      {/*<img className="logo" src="images/logo.svg" alt="logo" />*/}
      <h1>Tangerieve - Exploring generative art concepts</h1>
      <nav>
        <a href="#Simple">Simple</a>
        <a href="#Animated">Animated</a>
        <a href="#Mathematical">Mathematical</a>
      </nav>
    </header>
  );
}

export default Header;
