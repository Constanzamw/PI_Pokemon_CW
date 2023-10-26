/* eslint-disable no-unused-vars */
/* Estilos */
//import './Nav.module.css';

/*Dependencias */
//import { UseLocation, Route, Routes  } from "react-router-dom"

/*Componentes */

import Button from "../button/Button"


const Nav = () => {
  return (
    <div >
      <h1> NavBar </h1>
      <Button link='/home' text='Home' />
    </div>
  );
}

export default Nav;