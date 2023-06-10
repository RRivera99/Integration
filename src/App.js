import styles from './App.module.css'; 
import axios from 'axios';
import Form from './components/Form/Form.jsx';
import AboutYo from './components/About/AboutYo.jsx';
import Detail from './components/Detail/Detail.jsx';
import Nav from './components/Nav/Nav.jsx';
import Cards from './components/Cards/Cards.jsx';
import { useState } from 'react';
import {Routes, Route, useLocation} from 'react-router-dom';



function App() {
   const [characters, setCharacters]= useState([]); 
   
   function onSearch(id) {
      if (characters.find((character) => character.id === id)){
         window.alert('¡Este personaje ya se encuentra en pantalla!'); 
         return ;
      } else if (id<0 || id>826){
         window.alert('¡No hay personajes con este ID!');    
      } else {  
         axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         
               setCharacters((oldChars) => [...oldChars, data]);
             })}
      
   };
   
   function onClose (id) {
      
      setCharacters(characters.filter((character) => character.id !== Number(id)));

   };
   
   const {pathname} = useLocation();  
      
   
   return (
      
      <div className={styles.divApp}>

         { pathname !== '/' && <Nav onSearch={onSearch}/>}
         <Routes>
         <Route path = '/' element={<Form/>}/>
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
