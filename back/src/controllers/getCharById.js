const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character";

const getCharById = async (req, res) => {
   
    try {
        const {id} = req.params;
        const result = (await axios.get(`${URL}/${id}`)).data
        
            let character = {
                id: id,
                name: result.name,
                gender: result.gender,
                species: result.species,
                origin: result.origin,
                image: result.image,
                status: result.status,
            }
        return  character ? res.status(200).json(character)
        : res.status(404).send("Character not found")
    
    }    

    catch (error) {
        return res.status(500).send(error.message);
    }


   
    
    
     

}
module.exports= {getCharById}