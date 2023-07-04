import './App.css';
import {useState} from 'react'
import axios from 'axios'
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';

// React.useState

function App() {

const [characters, setCharacters] = useState([])

// fetch - axios
/*
FETCH -> res => res.json() 
    + es nativo, no hay que instalar

AXIOS -> res =>  res.data
    hay que instalarlo

*/

/*
estado characters = []
axios(1)
characters = [{1}]
axios(2)
characters = [{1}, {2}]
*/

const onSearch = (id) => {
  axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({ data }) => {
      if (!characters.find((char) => char.id === data.id)) {
        if (data.name) {
          setCharacters((oldCharacters) => [...oldCharacters, data]);
        }
      } else {
        window.alert(`Ya existe un personaje con el id ${id}`);
      }
    })
    .catch((err) => window.alert(err));
};

const onClose = (id) => {     
setCharacters(characters.filter(char => char.id !== id))
}

   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <Cards characters={characters} onClose = {onClose} />
      </div>
   );
}

export default App;


// rfce