/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* Estilos */
import './Detail.module.css';
/* Dependencias */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
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

  return (
    <div >
      <img src={pokemonDetailData?.image} />
      <h1>{pokemonDetailData?.name}</h1>   
      <label> Types: </label>
      <p>{pokemonDetailData?.types}</p> 
      <label> Life: </label>
      <p>{pokemonDetailData?.life}</p> 
      <label> Attack: </label>
      <p>{pokemonDetailData?.attack}</p> 
      <label> Defense: </label>
      <p>{pokemonDetailData?.defense}</p> 
      <label> Speed: </label>
      <p>{pokemonDetailData?.speed}</p> 
      <label> Height: </label>
      <p>{pokemonDetailData?.height}</p> 
      <label> Weight: </label>
      <p>{pokemonDetailData?.weight}</p> 

    </div>
  );
}

export default Detail;