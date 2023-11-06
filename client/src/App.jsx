/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

/* Estilos */
import './App.css';

/*Dependencias */
import { useLocation, Route, Routes  } from "react-router-dom"
import { useState } from 'react';
/*Componentes */
import {Home,Detail, Create, Landing, Login} from "./components/views"
import Nav from './components/nav/Nav';
//import Favorites from './components/views/favorites/Favorites';



const App = () => {
    const location = useLocation()

    

  return (
    <div>
      
      {location.pathname !== '/' && location.pathname !== '/login' && <Nav />}
      
      <Routes>
        < Route exact path= "/" element ={ <Landing /> } />   
        < Route exact path= "/login" element ={ <Login /> } />   
        < Route path= "/home" element ={ <Home /> } />
        < Route path= "/detail/:id" element ={ <Detail /> } />
        < Route path= "/create" element ={ <Create /> } />
        

      </Routes>
    </div>
  );
}

export default App;

/*
< Route path= "/favorites" element ={ <Favorites /> } />

*/