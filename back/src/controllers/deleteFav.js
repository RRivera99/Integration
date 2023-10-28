const {Favorite} = require ('../db');

module.exports= async (req, res) => {
    try {
        const {id}= req.params;
        await Favorite.destroy({where: {id}})
        const allFavorites = await Favorite.findAll();
        return res.status(200).json(allFavorites);
    } catch (error) {
        return res.status(500).json(error.message)
    }
}
