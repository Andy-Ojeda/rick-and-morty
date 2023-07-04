import style from "./Cards.module.css";
import Card from '../Card/Card';


export default function Cards(props) {
   
   return (
   <div className={style.container}>
      {/* <h3>Algo: {props.characters[0].name}</h3> */}
      {props.characters.map ((personaje) => {
         return <Card 
            key={personaje.id}
            name={personaje.name}
            status={personaje.status}
            species={personaje.species}
            gender={personaje.gender}
            origin={personaje.origin.name}

            image={personaje.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         
         />
      })}

   </div>
   );
}
