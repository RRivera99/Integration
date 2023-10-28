import { Link } from 'react-router-dom';
import styles from './Card.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { addFav, removeFav } from '../../redux/actions';
import axios from 'axios';

export default function Card({id, name, origin, status, image, species, gender, onClose}) {
   
   const character= {id,name, origin, status, image, species, gender};
   
   const myFavorites = useSelector ( state => state.myFavorites);
   const [isFav, setIsFav] = useState(false);
   const dispatch= useDispatch();
   

   //const addFavorite = (character) => {
   //   axios
   //   .post('http://localhost:3001/rickandmorty/fav', character)
   //   .then((res) => console.log('ok'));
      
   //}
   //const removeFavorite = async (id) => {
   //   await axios.delete(`'http://localhost:3001/rickandmorty/fav/'${id}`);
      
   //   alert('Eliminado con éxito');
   //}
   

   const  handleFavorite = ()=> {
      if (isFav) {
         setIsFav(false);
         dispatch(removeFav(id));
      } else {
         setIsFav(true);
         dispatch(addFav(character));
      }};
       
      useEffect(() => {
         myFavorites.forEach((fav) => {
            if (fav.id === id) {
               setIsFav(true);
            }
         });
      }, [myFavorites,id]);

   return (
      <div className = {styles.divGeneral}>
         {isFav ? (
      <button onClick={handleFavorite}>❤️</button>
      ) : (
      <button onClick={handleFavorite}>🤍</button>
      )
      }
          <button className={styles.boton} onClick={() => onClose(id)}>X</button>
          <img className = {styles.imagen} src={image} alt='' /> 
          <div className = {styles.divTexto}>
          <Link to={`/detail/${id}`}>
          <h2 className={styles.titulos}>Name: {name}</h2>
          </Link>
         <h2 className={styles.titulos}>Status: {status}</h2>
         <h2 className={styles.titulos}>Species: {species}</h2>
         <h2 className={styles.titulos}>Gender: {gender}</h2>
         <h2 className={styles.titulos}>Origin: {origin.name}</h2>
         </div>

      </div>
   );
}
