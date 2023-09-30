import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx'
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [characters, setCharacters] = useState([]);

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
       if (data.name) {
          if(characters.some(character => character.name == data.name)){
            window.alert('Este personaje ya está en la lista');
          }else{
            setCharacters((oldChars) => [...oldChars, data]);
          }
       } else {
          window.alert('¡No hay personajes con este ID!');
       }
    });
  }

  const onClose = (id) => {
    setCharacters(characters.filter(character => character.id !== Number(id)))
  }

  const randomCharacter = () => {

    let randomNumber = Math.trunc(Math.random() * (826 - 1) + 1);

    axios(`https://rickandmortyapi.com/api/character/${randomNumber}`).then(({ data }) => {
      if (data.name) {
         if(characters.some(character => character.name == data.name)){
           window.alert('Este personaje ya está en la lista');
         }else{
           console.log(characters)
           setCharacters((oldChars) => [...oldChars, data]);
         }
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
  }

  return (
    <div className='App'>
       <Nav onSearch={onSearch} randomCharacter={randomCharacter}/>
       <Cards characters={characters} onClose={onClose}/>
    </div>
  );
}

export default App;
