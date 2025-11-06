import React from 'react';

function Header(props) {
  return (
    <header style={{ background: '#7ec725ff', padding: '10px', display: 'flex', justifyContent: 'space-between' }}>
      <img src={props.logo} alt="Logo" width="50" />
      <nav>
        <a href="#home" style={{ margin: '0 10px' }}>Home</a>
        <a href="#about">ABOUT</a>
      </nav>
    </header>
  );
}

export default Header;
