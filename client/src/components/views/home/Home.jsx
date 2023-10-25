/* eslint-disable no-unused-vars */
/* Estilos */
import style from "./Home.module.css";
/*Dependencias */
import SearchBar from "../../searchBar/SearchBar";
import Cards from "../../cards/Cards"

/*Componentes */





const  Home = () => {
  return (
    <div >
        <h1>Home Page</h1>
        <SearchBar />
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