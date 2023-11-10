/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* Estilos */
import style from "./Home.module.css";
//import pokemonStadium from "../../../assets/pokemonStadium.png"
/*Dependencias */
import { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux"
/*Componentes */
import Nav from "../../nav/Nav";
//import Paginado from "../../paginado/Paginado";
import { getPokemons } from "../../../reudx/actions/actions";
//import { all } from "axios";
import Paginate from "../../paginado/Paginate";



const  Home = () => {
  const dispatch = useDispatch();

  let allPokemons = useSelector((state)=>state.allPokemons)
  const filterPokemons = useSelector((state) => state.filterPokemon);
    
    useEffect(()=>{
      if(!allPokemons.length){
        dispatch(getPokemons())
      }
    },[dispatch,allPokemons])

  return (
    <div className={style.background}>
      
      <div className={style.container}>
        <Nav/>
        <Paginate />
      </div>
    </div>
  );
}

export default Home;

