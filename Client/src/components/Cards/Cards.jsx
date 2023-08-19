import style from "./Cards.module.css";

import Card from "../Card/Card.jsx";

const Cards = ({characters, onClose}) => {
   return(
      <>
         {characters.map((character) => {
            return( 
               <>
               {/* <div className={style.grid}> */}
                  <div key={character.id} className={style.container}>
                     <Card 
                        key = {character.id}
                        id={character.id}
                        name= {character.name} 
                        status= {character.status}
                        species = {character.species} 
                        gender= {character.gender} 
                        origin = {character.origin.name}
                        image={character.image}
                        onClose= {onClose}
                        onFavorites = {()=> window.alert("Emulamos que tenemos un favorito.")}
                     />
                  </div>
               {/* </div> */}
               </>
               );
         })}
      </>
   );

};
export default Cards;