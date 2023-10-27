/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// import { useLocation } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { useState } from "react";
// import { filterTypes } from "../../reudx/actions/actions";
// import Select from "../../Utils/Select";
// import Card from "../card/Card";

// const Filters = ( filterPokemon, allPokemons)=>{
//     // const filterPoke = useSelector((state)=> state.filterPokemon)
//     // const location = useLocation();
//     // const dispatch = useDispatch();
   
//     //   const types = [
//     //     "normal",
//     //     "fighting",
//     //     "flying",
//     //     "poison",
//     //     "ground",
//     //     "rock",
//     //     "bug",
//     //     "ghost",
//     //     "steel",
//     //     "fire",
//     //     "water",
//     //     "grass",
//     //     "electric",
//     //     "psychic",
//     //     "ice",
//     //     "dragon",
//     //     "dark",
//     //     "fairy",
//     //     "unknown",
//     //     "shadow"
//     // ]

//     //   const handleFilterTypes =(event)=>{
//     //     const selectedType = event.target.value
//     //      dispatch(filterTypes(selectedType))
//     //   }

//     // return(
//     //     <div>
//     //       <div className="select">
//     //         <h1>Filtrados</h1>
//     //         {
//     //             filterPoke.map((poke)=>(
//     //                 <Card 
//     //                   key={poke?.id}
//     //                   id={poke?.id}
//     //                   name={poke?.name}
//     //                   image={poke?.image} 
//     //                   types={poke?.types}
//     //                 />
                    
//     //             ))
//     //         }

//     //         <p>Filter by type: </p> 
//     //         <Select 
//     //             name="Filter by type"
//     //             values={["all", ...types]} 
//     //             onChange={handleFilterTypes} 
//     //          />


//     //       </div>
  
//     //     </div>
//     // )
// }

// export default Filters;


/*

 const handleFilterTypes =(event)=>{
        if (types !== "null"){
            dispatch(filterTypes(types, allPokemons))
            setAux(({...aux, 
                filterType: types, 
                orderAz: "null", 
                orderAttack: "null", 
                filterOrigin: "null" 
            }))
           
        }
      }



        <div >
                <button value={aux.filterTypes} onClick={() => handleFilterTypes("normal")} > Normal </button>
                <button value={aux.filterTypes} onClick={() => handleFilterTypes("fighting")} > Fighting </button>
                <button value={aux.filterTypes} onClick={() => handleFilterTypes("flying")} > Flying </button>
                <button value={aux.filterTypes} onClick={() => handleFilterTypes("poison")} >Poison </button>
                <button value={aux.filterTypes} onClick={() => handleFilterTypes("ground")}> Ground </button>
                <button value={aux.filterTypes} onClick={() => handleFilterTypes("rock")} > Rock </button>
                <button value={aux.filterTypes} onClick={() => handleFilterTypes("bug")} > Bug </button>
                <button value={aux.filterTypes} onClick={() => handleFilterTypes("ghost")} > Ghost </button>
                <button value={aux.filterTypes} onClick={() => handleFilterTypes("steel")} > Steel </button>
                <button value={aux.filterTypes} onClick={() => handleFilterTypes("fire")} > Fire </button>
                <button value={aux.filterTypes} onClick={() => handleFilterTypes("water")} > Water </button>
                <button value={aux.filterTypes} onClick={() => handleFilterTypes("grass")} > Grass  </button>
                <button value={aux.filterTypes} onClick={() => handleFilterTypes("electric")} > Electric </button>
                <button value={aux.filterTypes} onClick={() => handleFilterTypes("psychic")} > Psychic </button>
                <button value={aux.filterTypes} onClick={() => handleFilterTypes("ice")}> Ice </button>
                <button value={aux.filterTypes} onClick={() => handleFilterTypes("dragon")} > Dragon </button>
                <button value={aux.filterTypes} onClick={() => handleFilterTypes("dark")} > Dark </button>
                <button value={aux.filterTypes} onClick={() => handleFilterTypes("fairy")} > Fairy </button>
                <button value={aux.filterTypes} onClick={() => handleFilterTypes("unknown")} > Unknown </button>
                <button value={aux.filterTypes} onClick={() => handleFilterTypes("shadow")} > Shadow </button>

            </div>


*/

