import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar.jsx";
import style from "./Nav.module.css";
import titulo from "../../Assets/titulo.png"


const Nav = ({functionSearch}) => {
  return(
    <>
      <div className={style.container}>
        <div className={style.containSearchBar}>
          <div className={style.conImg}>
            <img src={titulo} alt="titulo.png" />
          </div>
          <div className="conSearchbar">
            <SearchBar className={style.searchBar} functionSearch= {functionSearch} />
          </div>
        </div>
        <div className={style.buttons}>
          <Link to="/home"><h4>HOME</h4></Link>
          <Link to="/favorites"><h4>❤️</h4></Link>
          <Link to="/about"><h4>ABOUT</h4></Link>
        </div>
      </div>
    </>
  );

}

export default Nav;