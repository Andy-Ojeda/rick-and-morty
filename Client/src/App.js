import "./App.css";
import {useState, useEffect} from "react";
import {Routes, Route, useLocation, useNavigate} from "react-router-dom";

import axios from "axios";

//*COMPONENTS
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx"; 
import Detail from "./components/Detail/Detail.jsx";
import About from "./components/About/About.jsx";
import Error404 from "./components/Error/Error404.jsx";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";

function App() {
  const [character, setCharacter] = useState([]);
  const [access, setAccess] = useState(false);

  //*FORM
  const {pathname} = useLocation();
  console.log("Pathname: ", pathname);
  const navigate = useNavigate();

  //*False DB
  const EMAIL = "tuar_a@hotmail.com";
  const PASSWORD = "pass123"


  const login = (userData) => {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    axios(`${URL}?email=${email}&password=${password}`)
      .then(({ data }) => {
        const { access } = data;
        setAccess(access);
        access && navigate('/home');
      });
 }  

  // const Login = (userData) => {
  //   //Simulo que voy a mi DB
  //   if (userData.password === PASSWORD && userData.email === EMAIL) {
  //     setAccess(true);
  //     navigate('/home');
  //  }  else {
  //    alert("Usuario o contraseña incorrecta")
  //  }
  // }

  useEffect(() => {
    !access && navigate('/');
  }, [access]);
  

  const searchCharacter = (id) => {
    // axios(`https://rickandmortyapi.com/api/character/${id}`)
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
        if (!character.find((char) => char.id === data.id)) {
          if (data.name) {
            setCharacter((oldCharacter) => [...oldCharacter, data]);
          }
        }
        else {
          window.alert(`Ya existe un personaje con el id ${id}`);
        }
      })
      .catch((err) => alert(err.response.data));
    
  };
  
  const handleClose = (id) => {
    setCharacter(character.filter(char => char.id !== id));
  };

  return(
    <div className="container">
      {pathname !== "/" && <Nav functionSearch= {searchCharacter}/>}
      <div className="contRoutes">
      <Routes>
        <Route
          path="/" element={<Form login={login} />}
        />
        <Route
          path="/home"
          element={
            <Cards characters={character} onClose={handleClose} />
          }
        />
        <Route 
          path="/about"
          element={<About/>}
        />
        <Route 
          path="/detail/:id"  //* Variable que va a guardar lo que sea que esté despues de "detail/" 
          element={<Detail/>} //* se guarda en useParams.
        />
        <Route 
          path="/favorites"
          element={<Favorites/>}
        />
        <Route 
          path="*"   
          element={<Error404/>} 
        />
      </Routes>
      </div>
   
    </div>
  );

};
export default App;