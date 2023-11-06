/* eslint-disable no-unused-vars */
// import {useSelector, useDispatch} from "react-redux"
// import {useEffect, useState} from "react"
// import Card from "../../card/Card";
// import { addFav } from "../../../reudx/actions/actions";
// import { Link } from "react-router-dom";


// const Favorites = ()=>{
// const dispatch = useDispatch();
// let allPokemons = useSelector ((state)=> state.allPokemons);
// let myFavorites = useSelector ((state)=> state.myFavorites)

// useEffect(()=>{
  
//     dispatch(addFav())
// },[dispatch, myFavorites])

// console.log(myFavorites)
// return(
//     <div>
//         <h1> FAVORITES </h1>
//         {myFavorites.length > 0 ? (
//         myFavorites.map((pokemon) => (
//           <Card
//             key={pokemon.id}
//             id={pokemon.id}
//             name={pokemon.name}
//             // image={pokemon.image}
//             types={pokemon.types}
//           />
//         ))
//       ) : (
//         <p>No favorites yet.</p>
//       )}
   

//    <button>
//     <Link to="/home"> Home </Link>
//    </button>
//     </div>
// )


// }

// export default Favorites;