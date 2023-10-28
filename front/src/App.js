import styles from './App.module.css'; 
import axios from 'axios';
import Form from './components/Form/Form.jsx';
import AboutYo from './components/About/AboutYo.jsx';
import Detail from './components/Detail/Detail.jsx';
import Nav from './components/Nav/Nav.jsx';
import Cards from './components/Cards/Cards.jsx';
import Favorites from './components/Favorites/Favorites';
import { useState, useEffect } from 'react';
import {Routes, Route, useLocation} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';



function App() {
   const characters = useSelector(state => state.characters)
   const [access, setAccess] = useState(false);
   
   const navigate = useNavigate();

   async function login(userData) {
      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const {data} = await axios(URL + `?email=${email}&password=${password}`);
         const {access} =data;
         setAccess(access);
         access && navigate('/home');
      } catch (error) {
         console.log(error.mesagge)
      }
   }
      
   useEffect(() => {
      !access && navigate('/');
   }, [access, navigate]);
   
   async function onSearch(id) {
      try {
         const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
      const char = characters?.find(character => character.id === Number(data.id))
        
      if (char){
         
         window.alert('¡Este personaje ya se encuentra en pantalla!'); 
         return ;
      } else if (id<0 || id>826){
         window.alert('¡No hay personajes con este ID!');    
      } else {           
               setCharacters((characters) => [...characters, data]);
             }
         
      } catch (error) {
         console.log(error.mesagge)
            }
      
      
   };
   
   function onClose (id) {
      
      characters.filter((character) => character.id !== Number(id));

   };
   
   const {pathname} = useLocation();  
      
   
   return (
      
      <div className={styles.divApp}>

         { pathname !== '/' && <Nav onSearch={onSearch}/>}
         <Routes>
         <Route path = '/favorites' element= {<Favorites/>}/>
         <Route path = '/' element={<Form login ={login}/>}/>
         <Route path='/about' element = {<AboutYo/>} />
         <Route path = '/detail/:id' element = {<Detail/>}/>
         <Route path='/home'
                element={<Cards onClose = {onClose} characters={characters} />}
         /> 

         </Routes>
         
         
      </div>
   );
}

export default App;
