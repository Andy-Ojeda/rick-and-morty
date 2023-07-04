import style from "./Logo.module.css";

const Loguito = "./Rick_y_Morty.png";

export default function Logo(props) {
   //console.log("props: ", props);
   return (
   <div className={style.container}>
        <img className={style.loguito} src={Loguito} alt={`Imagen Logo`} />
   </div>
   );
}
