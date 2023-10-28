import { ADD_FAV, FILTER, ORDER, REMOVE_FAV, GET_FAV, GET_CHARACTERS } from './actions-types';

const initialState = {
   myFavorites: [],
   allCharacters: [],
   characters: []

 };

 const rootReducer = (state = initialState, action ) => {
    switch (action.type){

        case ADD_FAV:return { 
            ...state, 
            myFavorites: action.payload, 
            allCharacters: action.payload };

        case GET_CHARACTERS :return { 
                ...state, 
                characters: action.payload };
 
        case REMOVE_FAV: return {
             ...state, myFavorites: action.payload, 
        }
        
        case FILTER: 
        
            return {
            ...state,  
            myFavorites: state.allCharacters.filter((char) => char.gender === action.payload),
        }

        case ORDER: 
            const allCharactersFavCopy = [...state.allCharacters];
            return {
            ...state,
            myFavorites:
                action.payload === 'Ascendente'
                ? allCharactersFavCopy.sort((a,b) => a.id - b.id)
                : allCharactersFavCopy.sort((a,b) => b.id - a.id),
           
        }
        case GET_FAV: return {
            ...state, 
            myFavorites: action.payload, 
            allCharacters: action.payload 
        }
       
        default :
            return{
                ...state
            };
    }
 };

 export default rootReducer;

 //filter: itera sobre cada elemento del arreglo y devuelve aquellos elementos para
 // los cuales la función de filtrado devuelve true. Los elementos que no cumplan 
 // con la condición de filtrado se omiten del nuevo arreglo.