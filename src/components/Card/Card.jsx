
import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { addFav, removeFav } from "../../Redux/actions";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";



const Card = ({name, status, species, gender, origin, image, onClose, onFavorites, id, addFav, removeFav, myFavorites}) => {
    
    const [isFav, setIsFav] = useState(false);
    const {pathname} = useLocation();
    
    useEffect(() => {
        myFavorites.forEach((fav) => {
           if (fav.id === id) {
              setIsFav(true);
           }
        });
     }, [myFavorites]);


    const handleFavorite = () => {
        if (isFav){
            setIsFav(false);
            removeFav(id);
        }
        else {
            setIsFav(true);
            addFav({name, status, species, gender, origin, image, id});
        }
    }
    
    return(
        <>
        <div className={style.cont}>
            <div className={style.buttons}>
                {isFav? (<button className="buttonHeart" onClick={handleFavorite}>❤️</button>) : (
                        <button className="buttonHeart" onClick={handleFavorite}>🤍</button>)
                }

                {pathname !== "/favorites" && 
                    <button className="buttonX" onClick={()=> { onClose(id); handleFavorite()}}>❌</button>
                }
            </div>
            
            <div class={style.card}>
                <div class={style.firstContent}>
                    <div className={style.container}>
                        <img src={image} alt={`Retrato de ${name}`} />
                        <div className="data">
                            <p><label className={style.titulo}>Nombre: {name}</label></p>
                            <p className={style.parrafo}><label className={style.subtitulo}>Estado: {status}</label></p>
                            <p className={style.parrafo}><label className={style.subtitulo}>Género: {gender}</label></p>
                        </div>
                    </div>
                </div>
                <Link to={`/detail/${id}`}>  
                    <div class={style.secondContent}>
                        <span>Clickeame...</span>
                    </div>
                </Link>
            </div>
        </div>
        </>
    );
};


export function mapStateToProps (state){
    return {
        myFavorites: state.myFavorites,
    }
}

export function mapDispatchToProps (dispatch){
    return {
        addFav: function(character){
            dispatch(addFav(character))
        },
        removeFav: function(id){
            dispatch(removeFav(id))
        },
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Card);

// export default Card;