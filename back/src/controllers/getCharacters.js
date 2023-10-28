const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character";


const getCharacters = async (req, res) => {
   
    try {
        
        const {result} = (await axios.get(`${URL}`)).data
        
            let characters = result.map((char) => ({
                id: char.id,
                name: char.name,
                gender: char.gender,
                species: char.species,
                origin: char.origin,
                image: char.image,
                status: char.status,
            }))
            
            
        return  characters ? res.status(200).json(characters)
        : res.status(404).send("Characters not found")
    
    }    

    catch (error) {
        return res.status(500).send(error.message);
    }


   
    
    
     

}
module.exports= {getCharacters}