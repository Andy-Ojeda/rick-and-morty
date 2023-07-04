import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Cards/Cards.jsx';
import characters, { Rick } from './data.js';

const logo = "https://kawaii.gt/image/cache/catalog/Artes%20/marcas/Rick_and_Morty_logo-600x315.png";
console.log("Logo: ", Logo);

function App() {
      return (
      <div className='App'>
         <header className='Header'>
            <Logo Logo={Logo}/>   
            <SearchBar onSearch={(characterID) => window.alert(characterID)} />
         </header>
         <Cards characters={characters} />
         
      </div>
   );
}

export default App;
