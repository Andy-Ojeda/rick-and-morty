import { ADD_FAV, REMOVE_FAV } from "./action-type"
import axios from "axios";

//*---------------------- PRUEBA ---------------------------
export const FETCH_GENRES_SUCCESS = 'FETCH_GENRES_SUCCESS';

export const fetchGenresSuccess = (genres) => ({
  type: FETCH_GENRES_SUCCESS,
  payload: genres,
});
//*----------------------------------------------------------

// export const addFav = (payload) => {
//     return {          // /\ id
//         type: ADD_FAV,
//         payload,    //payload: id
//     }
// }
export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
       axios.post(endpoint, character).then(({ data }) => {
          return dispatch({
             type: 'ADD_FAV',
             payload: data,
          });
       });
    };
 };  


// export const removeFav = (payload) => {
//     return {
//         type: REMOVE_FAV,
//         payload,
//     }
// }
export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
       axios.delete(endpoint).then(({ data }) => {
          return dispatch({
             type: 'REMOVE_FAV',
             payload: data,
       });
       });
    };
 };