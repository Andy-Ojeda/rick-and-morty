import { ADD_FAV, REMOVE_FAV } from "./action-type"


export const addFav = (payload) => {
    return {          // /\ id
        type: ADD_FAV,
        payload,    //payload: id
    }
}

export const removeFav = (payload) => {
    return {
        type: REMOVE_FAV,
        payload,
    }
}
