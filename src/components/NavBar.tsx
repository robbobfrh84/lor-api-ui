import { MouseEvent } from 'react';
import './../css/navBar.css';

function NavBar({ 
  setPage,
  updateContent
}: { 
  setPage: Function,
  updateContent: Function
}) {

  const buttonHandler = (event: MouseEvent) => {
    event.preventDefault();
    const name = event.currentTarget.getAttribute('name');
    setPage(name);
    updateContent(name);
  };

  return (
    <div className="NavBar">

      <h1>🌋 Lord of the Rings 🏔️</h1>

      <h3> ❧ The One API - UI ❧</h3>

      <nav className="buttons-container">

        <div className="button-container">
          <button 
            className="btn gold" 
            onClick={buttonHandler} 
            name="movie"
          >🍿 &nbsp;Movies&nbsp; 🎥</button>
        </div>

        <div className="button-container">
          <button 
            className="btn blue" 
            onClick={buttonHandler} 
            name="character"
          >🧙‍♂️ &nbsp;Characters&nbsp; 🧝‍♀️</button>
        </div>

        <div className="button-container">
          <button 
            className="btn green" 
            onClick={buttonHandler} 
            name="quote"
          >❛❛ Quotes ❜❜</button>
        </div>

      </nav>
      {/* <hr /> */}
    </div>
  );
}

export default NavBar;