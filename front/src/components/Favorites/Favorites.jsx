import { useSelector, useDispatch} from 'react-redux';
import { useState } from 'react';
import styles from './Favorites.module.css';
import { Link } from "react-router-dom";
import { filterCards, orderCards} from '../../redux/actions';
const Favorites = () => {

const [aux, setAux] = useState(true);
const myFavorites = useSelector(state => state.myFavorites);
const allCharacters = useSelector(state => state.allCharacters);
const dispatch = useDispatch();



function handleOrder (e){
    setAux(true);
    dispatch(orderCards(e.target.value))
    
}

function handleFilter (e) {
    setAux(true);
    dispatch(filterCards(e.target.value))
}

function mostrarTodos () {
    setAux(false);
}



return (
        <div>
                        <select onChange={handleOrder}>
                        <option value="Ascendente">Ascendente</option>
                        <option value="Descendente">Descendente</option>
                        </select>
                        <select onChange={handleFilter}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Genderless">Genderless</option>
                        <option value="unknown">unknown</option>
                        </select>
                        <button onClick={mostrarTodos}>See All</button>
                        
                       
            { aux ?
           
                myFavorites.map((char) => {
                    return (
                        <div className = {styles.divGeneral}>
                         <img className = {styles.imagen} src={char.image} alt={char.name} /> 
                         <div className = {styles.divTexto}>
                         <Link to={`/detail/${char.id}`}>
                         <h2 className={styles.titulos}>Name: {char.name}</h2>
                         </Link>
                        <h2 className={styles.titulos}>Species: {char.species}</h2>
                        <h2 className={styles.titulos}>Gender: {char.gender}</h2>
                        
                        </div>
               
                     </div>
                    );
            })
            : allCharacters.map((char) => {
                return (
                    <div className = {styles.divGeneral}>
                     <img className = {styles.imagen} src={char.image} alt={char.name} /> 
                     <div className = {styles.divTexto}>
                     <Link to={`/detail/${char.id}`}>
                     <h2 className={styles.titulos}>Name: {char.name}</h2>
                     </Link>
                    <h2 className={styles.titulos}>Species: {char.species}</h2>
                    <h2 className={styles.titulos}>Gender: {char.gender}</h2>
                   
                    </div>
           
                 </div>
                );
            })  
            
            }                  
                            


        </div>
    )
} 

export default Favorites;


//