/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

/* Estilos */
import './App.css';

/*Dependencias */
import { useLocation, Route, Routes  } from "react-router-dom"
import { useState } from 'react';

/*Componentes */
import {Home,Detail, Create, Landing} from "./components/views"
import Paginate from './components/paginado/Paginate';
import Nav from './components/nav/Nav';
import Card from "../src/components/card/Card";


const App = () => {
    const location = useLocation()

    

  return (
    <div>
      
       {location.pathname !== '/' && <Nav />}
      <Routes>
        < Route exact path= "/" element ={ <Landing /> } />   
        < Route path= "/home" element ={ <Home /> } />
        < Route path= "/detail/:id" element ={ <Detail /> } />
        < Route path= "/create" element ={ <Create /> } />

      </Routes>
    </div>
  );
}

export default App;



/*

const App = () => {
    const location = useLocation()

    const elementsPerPage = 12;
    const [currentPage, SetCurrentPage] = useState(1)

    const startIndex = (currentPage - 1) * elementsPerPage;
    const endIndex = startIndex + elementsPerPage;
    const currentElement = data.slice(startIndex, endIndex); // VER DATA
    const totalPages = Math.ceil(data.length / elementsPerPage)

    function pageHandler(pageNumber){
      SetCurrentPage(pageNumber)
    }

  return (
    <div>
      <Paginate page={pageHandler} current={currentPage} total={totalPages} />
        <ul>
          {currentElement.map((pokemon)=>{
            return(
              <Card 
                key={pokemon?.id}
                //id={pokemon?.id}
                name={pokemon?.name}
                image={pokemon?.image} 
                types={pokemon?.types}
  
              />
            )
          })}
        </ul>
       {location.pathname !== '/' && <Nav />}
      <Routes>
        < Route exact path= "/" element ={ <Landing /> } />   
        < Route path= "/home" element ={ <Home /> } />
        < Route path= "/detail/:id" element ={ <Detail /> } />
        < Route path= "/create" element ={ <Create /> } />

      </Routes>
    </div>
  );
}

export default App;



*/