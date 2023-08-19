import React, { useEffect, useState } from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import style from "./Detail.module.css";

function Detail() {
  
  const {id} = useParams();

  const [characterDetail, setCharacterDetail] = useState({});

  useEffect(()=>{
    
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({data}) => {
      if (data.name){
        setCharacterDetail(data);
      }
      else {
        window.alert("No hay personajes con ese ID");
      }
    });
    return setCharacterDetail({}); //* Este seria el WlUnmount. Cuando me retire de detail 
  
  },[id]);

  return (
    <div className={style.container}>
      {/* {characterDetail ? ( */}
      {Object.keys(characterDetail).length !== 0 ? (    //! PREGUNTAR A QUÉ SE DEBE ESTE SUCESO??
        <div className={style.cont}>
          <div className={style.contA}>
            <img src={characterDetail.image} alt='' />
          </div>
          <div className={style.contB}>  
            <div className={style.datos}>  
              <h2>{characterDetail.name}</h2>
              <h4>Gender: {characterDetail.gender}</h4>
              <h4>Specie: {characterDetail.species}</h4>
              {/* <h4>Type: {characterDetail.type}</h4> */}
              <h4>Status: {characterDetail.status}</h4>
              <h4>Origin: {characterDetail.origin?.name}</h4>
              {/* <h4>Location: {characterDetail.location}</h4> */}
            
            </div>
          </div>
        </div>  
      ) : <h3>Loading...</h3>};
    </div>
  );
}

export default Detail