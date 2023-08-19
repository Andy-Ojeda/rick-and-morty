import React, { useState } from "react";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import Card from "../Card/Card.jsx"; 
import { orderCards, filterCards } from "../../redux/actions.js"; // Importa las actions que hayas creado
import { useDispatch } from "react-redux";
import { StyledSelect, ContenedorFav, Container, SelectorDiv } from "./FavouritesButton.js";

function Favorites( ) {
  const myFavorites = useSelector(state => state.myFavorites)
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);
  const optionsGender = ["All", "Male", "Female", "Genderless", "unknown"];
  const handleOrder = (e)=>{
    dispatch(orderCards(e.target.value));
    setAux(!aux); // Cambiar el valor de 'aux' al valor opuesto
  };

  const handleFilter = (e) => {
    const value = e.target.value;
    dispatch(filterCards(value));

    // Si se selecciona la opción "all", mostramos todos los personajes
    if (value === "all") {
      setAux(false);
    } else {
      setAux(true);
    }
  };


  return (
    <>
    <StyledSelect onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </StyledSelect>
      
        <StyledSelect onChange={handleFilter}>
        {optionsGender.map(option => 
          <option key={option} value={option}> {option} </option>
        )}
        </StyledSelect>
       
          
    <ContenedorFav>
      {myFavorites?.map((favorite) => (
        <Card
          key={favorite.id}
          id={favorite.id}
          name={favorite.name}
          status={favorite.status}
          species={favorite.species}
          image={favorite.image}
          origin={favorite.origin} 
          gender={favorite.gender} 
        />
      ))}
    </ContenedorFav></>
  );
}

export const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps)(Favorites);
