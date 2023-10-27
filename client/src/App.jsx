/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

/* Estilos */
import './App.css';

/*Dependencias */
import { useLocation, Route, Routes  } from "react-router-dom"

/*Componentes */
import {Home,Detail, Create, Landing} from "./components/views"
import Nav from './components/nav/Nav';
import SearchBar from './components/searchBar/SearchBar';


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
