const {User} = require('../db');

module.exports = async (req, res) => {
    try {
        const {id, email, password} = req.body;
    if (!email || !password) return res.status(400).send('Faltan datos')
    const user = await User.findOrCreate({where: {id, email,password}})
    return res.json(user)
        
    } catch (error) {
        return res.status(500).json(error.message)
    }
}
