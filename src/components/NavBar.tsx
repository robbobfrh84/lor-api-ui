import React from 'react';
import './../css/navBar.css';

function NavBar() {
  return (
    <div className="NavBar">
      <h1>🧙‍♂️ Lord of the Rings 💍</h1>
      <h3>The One API - UI</h3>
      <hr />
      <nav>
        <button>Movies</button> &nbsp;
        <button>Characters</button> &nbsp;
        <button>Quotes</button> &nbsp;
      </nav>
      <hr />
    </div>
  );
}

export default NavBar;