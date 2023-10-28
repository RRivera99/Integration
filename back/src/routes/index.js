const deleteFav = require('../controllers/deleteFav');
const {getCharById}= require('../controllers/getCharById');
const { getCharacters } = require('../controllers/getCharacters');
const login = require('../controllers/login');
const postFav = require('../controllers/postFav');
const postUser = require('../controllers/postUser');


const {Router} = require('express');


const mainRouter = Router();

mainRouter.get("/characters", getCharacters)
mainRouter.get("/character/:id", getCharById); 
mainRouter.get("/login", login); 
mainRouter.post("/login", postUser);
mainRouter.post('/fav', postFav);
mainRouter.delete("/fav/:id", deleteFav);

module.exports= (mainRouter); 