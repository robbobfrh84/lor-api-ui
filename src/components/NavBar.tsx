import { MouseEvent, Dispatch, SetStateAction } from 'react';
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
    const name = event.currentTarget.getAttribute('name')
    setPage(name);
    updateContent(name);
  };

  return (
    <div className="NavBar">
      <h1>🧙‍♂️ Lord of the Rings 💍</h1>
      <h3>The One API - UI</h3>
      <hr />
      <nav>
        <button onClick={buttonHandler} name="movie">Movies</button> &nbsp;
        <button onClick={buttonHandler} name="character">Characters</button> &nbsp;
        <button onClick={buttonHandler} name="quote">Quotes</button> &nbsp;
      </nav>
      <hr />
    </div>
  );
}

export default NavBar;