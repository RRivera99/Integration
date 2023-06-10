import Card from '../Card/Card.jsx';
import styles from './Cards.module.css'
export default function Cards({characters,onClose}) {
   
   return <div className = {styles.divCards}>
      
      
     
      {
         characters.map(({name, status, species, gender, image, origin, id})=> {
            return (
            <Card
               id = {id}
               name = {name}
               status = {status}
               species = {species}
               gender = {gender}
               image = {image}
               origin = {origin}
               onClose = {onClose}
            />);
         })
      }


   </div>;
}
