import { useState } from "react";
import style from "./SearchBar.module.css";

const SearchBar = (props) => {
   const [id, setId] = useState("");
   const [buttonName, setButtonName] = useState("Buscar!!");
   
   const handleChange = (event) => {
      setId(event.target.value);
   };
   const ButtonClick = () => {
      props.functionSearch(id);
   }
 
   return(
      <>
      <div className={style.container}>
         <input type="text" onChange={handleChange} />
         <button onClick={ButtonClick}>{buttonName}</button>
      </div>
      </>
   );
};

export default SearchBar;