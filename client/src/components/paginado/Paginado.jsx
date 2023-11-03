/* eslint-disable no-undef */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import style from "./Paginado.module.css"

// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import Card from "../card/Card";


// const Paginado = ()=>{
//     const allPokemons = useSelector((state)=> state.allPokemons)
//     let filterPokemon= useSelector((state)=> state.filterPokemon)
//   const [currentPage, setCurrentPage] = useState(0); // pagina

//   let nextPage = () => {
//     if (allPokemons.length <= currentPage + 12) {
//        setCurrentPage(currentPage);
//     } else setCurrentPage(currentPage + 12);
//  };
//  let prevPage = () => {
//     if (currentPage < 12) {
//        setCurrentPage(0);
//     } else {
//        setCurrentPage(currentPage - 12);
//     }
//  };
 
// const firstPage = () => {
//   setCurrentPage(0);
// };

// const lastPage = () => {
//   setCurrentPage(allPokemons.length - 12);
// };

// useEffect(() => {
//   firstPage()
// }, [allPokemons]);

// //const filteredPokemons = allPokemons.slice(currentPage, currentPage + 12);
// const filteredPokemons= filterPokemon.length > 0 ? filterPokemon : allPokemons.slice(currentPage, currentPage + 12)

//   return(
//     <div >
//        <div >
//             <button onClick={firstPage}> ⏮ </button>
//             <button onClick={prevPage}>  ◀  </button>
//             <button onClick={() => handlePageClick(Math.ceil(currentPage / 12 + 1))}>
//                 {Math.ceil(currentPage / 12 + 1)}
//             </button>

//             <button onClick={nextPage}>  ▶  </button>
//             <button onClick={lastPage}>  ⏭ </button>
//         </div>
    // <div className={style.cardContainer} >
    //   {
    //     filteredPokemons.map((pokemon)=>{ // iamgen nombre tipos
    //       return(
    //         <Card 
    //           key={pokemon?.id}
    //           id={pokemon?.id}
    //           name={pokemon?.name}
    //           image={pokemon?.image} 
    //           types={pokemon?.types}

    //         />
    //       )
    //     })
    //   }
//       </div>

//   </div>
  
//   )

// }

// export default Paginado;