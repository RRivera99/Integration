import styles from './SearchBar.module.css'
import { useState } from 'react';

export default function SearchBar(props) {
   const {onSearch} = props;
   const [id, setId] = useState('')
   function handleChange (e){
      let input = e.target.value;
      setId(input)
   }
   return (
      <div className={styles.divSearch}>
         <input className={styles.input} type='search' value = {id} onChange={handleChange} />
         <button className={styles.boton} onClick = {() => onSearch(id)}>Agregar</button> 
      </div>
   );
}
