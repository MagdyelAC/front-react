import imageRickMorty from './img/rick-morty.png';
import credencial from './img/credencial.jpeg';
import './App.css';
import { useState } from 'react';
import Characters from './components/Characters';

function App() {
  const[characters, setCharacters] = useState(null);

  const reqApi = async() => {
    const api = await fetch("https://rickandmortyapi.com/api/character")
    const characterApi = await api.json();
    
    setCharacters(characterApi.results);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick and Morty</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          <>
          <img src={imageRickMorty} alt="Rick y Morty" className='img-home' />
          <button onClick={reqApi} className="btn-search">
            Buscar personajes
            </button>
          </>
        )} 
        <h1 className="nombre">Magdyel Aguilar Cid</h1>
        <h1 className="matricula">S20020309</h1>
        <img src={credencial} alt="credencial" className='img-cred' />
      </header>
    </div>
  );
}

export default App;