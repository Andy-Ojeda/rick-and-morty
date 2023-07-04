import {Button, CardConteiner, Title, ButtonCont, Image, Label} from './styled'

export default function Card({name, status, species, gender, origin, image, onClose, onFavorites, id}) {

   return (
      <CardConteiner>
         <ButtonCont> 
         <Button onClick={onFavorites}>💛</Button>
         <Button close onClick={() => onClose(id)}>❌</Button>
         </ButtonCont>
         <Image src={image} alt = {`No se encuentra la imagen de ${name}`}/>
          <Title> {name}</Title>
         <Label>Status: {status}</Label>
         <Label>Specie: {species}</Label>
         <Label>Gender: {gender}</Label>
         <Label>Origin: {origin}</Label>
       
      </CardConteiner>
   );
}
