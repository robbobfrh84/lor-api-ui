import { useState } from 'react';
import './App.css';

import API from './components/API';

import NavBar from './components/NavBar';
import Content from './components/Content';

type moviesResultProps = {
  name: string;
  _id: string;
};

type charactersResultProps = {
  name: string;
  race: string;
  _id: string;
};

type quotesResultProps = {
  character: string;
  dialog: string;
  _id: string;
}

function App() {
  const [page, setPage] = useState("home");
  const [loading, setLoading] = useState(false);

  const [requestTrack, setRequestTrack] = useState({
    movie: false,
    character: false,
    quote: false,
  });

  const [moviesResult, setMoviesResult] = useState<moviesResultProps[]>([]);
  const [charactersResult, setCharactersResult] = useState<charactersResultProps[]>([]);
  const [quotesResult, setQuotesResult] = useState<quotesResultProps[]>([]);

  const updateContent = ( endPoint: string ) => {
    switch(endPoint) {
      case "movie":
        API('movie', setMoviesResult, requestTrack, setLoading);
        break;
      case "character":
        API('character', setCharactersResult, requestTrack, setLoading);
        break;
      case "quote":
        API('quote', setQuotesResult, requestTrack, setLoading);
        break;
    }
  }

  return (
    <div className="App">
      <NavBar 
        setPage={setPage}
        updateContent={updateContent}
      />
      <Content 
        page={page}
        loading={loading}
        moviesResult={moviesResult}
        charactersResult={charactersResult}
        quotesResult={quotesResult}
      />
    </div>
  );
}

export default App;


