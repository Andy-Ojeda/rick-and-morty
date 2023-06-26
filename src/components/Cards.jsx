import Card from './Card';


export default function Cards(props) {
   console.log(props.characters[0]);
   return (
   <div>
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