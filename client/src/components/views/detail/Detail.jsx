/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* Estilos */
import style from "./Detail.module.css";
/* Dependencias */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams,Link } from 'react-router-dom';

/* Componentes */
import { pokemonDetail, cleanDetail } from '../../../reudx/actions/actions';


const  Detail = () => {

  const dispatch = useDispatch();
  const { id } = useParams();

  const pokemonDetailData = useSelector((state)=> state.pokemonDetail)
 

  useEffect(()=>{
    dispatch(pokemonDetail(id));
    return ()=> dispatch(cleanDetail())
  },[dispatch,id])

  //esto lo hago porque sino me aparecen los typesjuntos!
  const formattedTypes = pokemonDetailData?.types 
    ? pokemonDetailData.types.join(', ') 
    : '';

  

  return (
    
      <div className={style.container}>
      <div>
      <button>
        <Link to="/home" > X </Link>
      </button>
      <div className={style.card}>
        <img src={pokemonDetailData?.image} />
        <h1>{pokemonDetailData?.name}</h1>   
        <div className={style.info}>

        <label className={style.name}> Types: </label>
        <p>{formattedTypes}</p> 

        <label className={style.name}> HP: </label>
        <span>{pokemonDetailData?.hitPoints}</span>
 
         <br/><br/>

        <label className={style.name}> Attack: </label>
        <span>{pokemonDetailData?.attack}</span>
        <br/><br/>

        <label className={style.name}> Defense: </label>
        <span>{pokemonDetailData?.defense}</span>
        <br/><br/>

        <label className={style.name}> Speed: </label>
        <span>{pokemonDetailData?.speed}</span> 
        <br/><br/>

        <label className={style.name}> Height: </label>
        <span>{pokemonDetailData?.height}</span>
        <br/><br/>
        
        <label className={style.name}> Weight: </label>
        <span>{pokemonDetailData?.weight}</span>
      </div>
      </div>
      </div>
    </div>
    
  );
}

export default Detail;