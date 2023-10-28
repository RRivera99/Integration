import { ADD_FAV,REMOVE_FAV, FILTER, ORDER, GET_FAV, GET_CHARACTERS } from "./actions-types";
import axios from 'axios';


export const addFav = (character) => {

   try {
      const endpoint = 'http://localhost:3001/rickandmorty/fav';
      return async (dispatch) => {
      const {data} = await axios.post(endpoint, character)
         return dispatch({
            type: ADD_FAV,
            payload: data,
         });
      
   };   
   } catch (error) {
      console.log(error.message) 
   }
}

export const getCharacters = () => {

   try {
      const endpoint = 'http://localhost:3001/rickandmorty/characters';
      return async (dispatch) => {
      const {data} = await axios.get(endpoint)
         return dispatch({
            type: GET_CHARACTERS,
            payload: data,
         });
      
   };   
   } catch (error) {
      console.log(error.message) 
   }
}



export const getFav = () => {
   return async function (dispatch) {
      const URL_BASE = 'http://localhost:3001';
      const response = await  axios.get(`${URL_BASE}/rickandmorty/fav`);
      dispatch({ type: GET_FAV, payload: response.data});
   }
}

   
  
export const removeFav = (id) => {
   try {
      const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
      return async (dispatch) => {
         const {data} = await axios.delete(endpoint)
         return dispatch({
            type: REMOVE_FAV,
            payload: data,
         });
      }

   } catch (error) {
   console.log(error.message);
      
   }
   
}

export const filterCards = (gender) => {
return {
    type: FILTER,
    payload: gender,
  }
 };

export const orderCards = (orden) => {
  return {
    type: ORDER,
    payload: orden,
  }

}


  
