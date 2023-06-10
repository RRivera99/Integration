import { Link } from 'react-router-dom';
import styles from './Card.module.css';

export default function Card({name, status, species, gender, image, origin, onClose, id}) {
   return (
      <div className = {styles.divGeneral}>
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
