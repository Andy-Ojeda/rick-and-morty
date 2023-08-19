import { ADD_FAV, REMOVE_FAV } from "./action-type";


//*-------------------------------  PRUEBA  ----------------------------------------
// import { FETCH_GENRES_SUCCESS } from './actions';

// const initialState = {
//   genres: [],
// };

// const genresReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_GENRES_SUCCESS:
//       return {
//         ...state,
//         genres: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default genresReducer;
//*---------------------------------------------------------------------------------




const initialState = {
    myFavorites: [],
    // detail: {}
};

function rootReducer (state = initialState, action){
    switch(action.type){
        // case ADD_FAV:
        //     return {
        //         ...state,
        //         myFavorites: [...state.myFavorites, action.payload],
        //     }
        case ADD_FAV:
            return { ...state, myFavorites: action.payload, allCharacters: action.payload };
        case REMOVE_FAV:
            // return {
            //     ...state,
            //     myFavorites: state.myFavorites.filter(char => char.id !== action.payload)
            // }                                                   //          Number(   )
            return { ...state, myFavorites: action.payload };
        default:
            return state;
    }
}

export default rootReducer;