/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* Estilos */
import style from "./Home.module.css";
/*Dependencias */
import { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux"
/*Componentes */
import SearchBar from "../../searchBar/SearchBar";
import Cards from "../../cards/Cards"
import { getPokemons } from "../../../reudx/actions/actions";


const  Home = () => {
  const dispatch = useDispatch();

  let allPokemons = useSelector((state)=>state.allPokemons)
  

  useEffect(()=>{
    dispatch(getPokemons())
  },[dispatch])




  return (
    <div >
  
        <Cards />
        
    </div>
  );
}

export default Home;

/*

 HOME PAGE | la página principal de tu SPA debe contener:

 --> SearchBar: un input de búsqueda para encontrar pokemon por nombre. La búsqueda debe ser exacta, por lo que sólo lo encontrará si se lo busca con su nombre completo.
 --> Sector en el que se vea un listado de cards con los pokemones. 
 Al iniciar deberá cargar los primeros resultados obtenidos desde la ruta GET /pokemons y deberá mostrar su:
        Imagen.
        Nombre.
        Tipos.
 --> Cuando se le hace click a una Card deberá redirigir al detalle de ese pokemon específico. --> DETAIL
 --> Botones/Opciones para filtrar por tipo, y por si su origen es de la API o de la base de datos (creados por nosotros desde el formulario).
 --> Botones/Opciones para ordenar tanto ascendentemente como descendentemente los pokemones por orden alfabético y por ataque.

-------> Paginado: el listado de pokemones se hará por partes. Tu SPA debe contar con un paginado que muestre un total de 12 pokemones por página.


*/