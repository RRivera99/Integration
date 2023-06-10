
import { useParams } from "react-router-dom";
import { useState , useEffect } from "react";
import axios from "axios";

export default function Detail (){
   
const [character, setCharacter] = useState({});
const {id} = useParams();

useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);

    return(
        <div>
            {character.name ? (
                <> 
                <h3>{character.name}</h3>
                <p>{character.status}</p>
                <p>{character.species}</p>
                <p>{character.gender}</p>
                <p>{character.origin?.name}</p>
                <img src={character.image} alt='img'/>  
                
                </>
            ) : (
                <h3>Loading...</h3>
            )}      
            
        </div>
    );
};