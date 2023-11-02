/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */

/* eslint-disable no-unused-vars */
import style from'./Create.module.css';
// import { UseLocation, Route, Routes  } from "react-router-dom"

import { useState,useEffect  } from 'react';
import validationsCreate from "../../../Utils/validationsCreate"
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { clearSearch, createPokemon, createImage } from '../../../reudx/actions/actions';
import { useDispatch, useSelector } from 'react-redux';



const  Create = () => {
  const dispatch = useDispatch();
  const imgList = useSelector((state) => state.img);
  const types = useSelector((state) => state.types);

  const [created, setCreated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [formData, setFormData] = useState({
     // id:"",
    name: "",
    image: "",
    hitPoints: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    type: [],
   // type2: "",
  });

  const [errors, setErrors] = useState({})
  const [allFieldsCompleted, setAllFieldsCompleted] = useState(false);

  const handleChange= (event) =>{
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
    setErrors(validationsCreate(formData))
  }

  const handleSubmit = (event)=>{
    event.preventDefault();
     dispatch(createPokemon(formData))
    .then(() => {
      setCreated(true);
      setShowAlert(true); // Mostrar la alerta
      setFormData({ // Limpiar los campos
        //id: "",
        name: "",
        image: "",
        hitPoints: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        types: [],
      });
      window.location.reload(); // Recarga la página VER SI ES VALIDO
    })
    .catch((error) => {
      console.error(error);
    });
  //});
  }

  const areAllFieldsCompleted = () => {
    const fields = Object.values(formData);
    return fields.every((field) => field !== "" && field !== null);
  };

useEffect(() => {
    setAllFieldsCompleted(areAllFieldsCompleted());
}, [formData,]);

useEffect(() => {
  dispatch(createImage())
   }, [dispatch]);

  return (
   <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="id"> Number</label>
      </div>
      <div>
        <input 
          type="number" 
          key="id" 
          name="id" 
          placeholder="Choose a number" 
          value={formData.id} 
          onChange={handleChange}
        />
          <br/>
        {errors.id ?  <span className={style.error}>{errors.id}</span> : null}
      </div>

      <div>
        <label htmlFor="name"> Name</label>
      </div>
      <div>
        <input 
          type="text" 
          key="name" 
          name="name" 
          placeholder="Choose a name" 
          value={formData.name} 
          onChange={handleChange}
        />
          <br/>
        {errors.name ?  <span className={style.error}>{errors.name}</span> : null}
      </div>

      <div>
        <label htmlFor="hitPoints"> HitPoints </label>
      </div>
      <div>
        <input 
          type="number" 
          key="hitPoints" 
          name="hitPoints" 
          placeholder="0-100" 
          value={formData.hitPoints} 
          onChange={handleChange}
        />
          <br/>
        {errors.hitPoints ?  <span className={style.error}>{errors.hitPoints}</span> : null}
      </div>

      <div>
        <label htmlFor="attack"> Attack </label>
      </div>
      <div>
        <input 
          type="number" 
          key="attack" 
          name="attack" 
          placeholder="0-100" 
          value={formData.attack} 
          onChange={handleChange}
        />
          <br/>
        {errors.attack ?  <span className={style.error}>{errors.attack}</span> : null}
      </div>

      <div>
        <label htmlFor="defense"> Defense </label>
      </div>
      <div>
        <input 
          type="number" 
          key="defense" 
          name="defense" 
          placeholder="0-100" 
          value={formData.defense} 
          onChange={handleChange}
        />
          <br/>
        {errors.defense ?  <span className={style.error}>{errors.defense}</span> : null}
      </div>

      <div>
        <label htmlFor="speed"> Speed </label>
      </div>
      <div>
        <input 
          type="number" 
          key="speed" 
          name="speed" 
          placeholder="0-100" 
          value={formData.speed} 
          onChange={handleChange}
        />
          <br/>
        {errors.speed ?  <span className={style.error}>{errors.speed}</span> : null}
      </div>

      <div>
        <label htmlFor="height"> Height </label>
      </div>
      <div>
        <input 
          type="number" 
          key="height" 
          name="height" 
          placeholder="0-100" 
          value={formData.height} 
          onChange={handleChange}
        />
          <br/>
        {errors.height ?  <span className={style.error}>{errors.height}</span> : null}
      </div>

      <div>
        <label htmlFor="image"> Image </label>
      </div>
      <div>
      <select name="image" value={formData.image} onChange={handleChange}>
          <option value="">Select an image</option>
          {imgList && imgList.map((image) => (
            <option key={image.id} value={image.name}>
              {image.name}
            </option>
          ))}
        </select>
        {
        formData.image && (
          <img src={formData.image} alt="selected image" />
        )}
        <br />
        {errors.image ? <span className={style.error}>{errors.image}</span> : null}
      </div>
      <div>
        <label htmlFor="weight"> Weight </label>
      </div>
      <div>
        <input 
          type="number" 
          key="weight" 
          name="weight" 
          placeholder="0-100" 
          value={formData.weight} 
          onChange={handleChange}
        />
          <br/>
        {errors.weight ?  <span className={style.error}>{errors.weight}</span> : null}
      </div>

      <div className={style.row}>
        <div className={style.col1}>
          <label htmlFor="types">Type</label>
        </div>
        <div className={style.col2}>
        <select id="types" name="types" value={formData.types} onChange={handleChange}>
            <option value="">Select a type</option>
            {types.map((type) => (
              <option key={type.id} value={type.id}>
                {type.name}
              </option>
            ))}
          </select>
        </div>
        </div>
       <div className={style.row}>
          <button 
            type="submit" 
            name="createButton" 
            className={`${style.button} ${allFieldsCompleted ? '' : style.disabledButton}`}
           disabled={!allFieldsCompleted}
            > 
            Create your Pokemon!</button>
        </div> 
    <div>
      <button>
        <Link to="/home"> Home </Link>
      </button>
    </div>
    {showAlert && (
  <div className={style.alert}>
    <p>Pokémon created successfully!</p>
    
  </div>
)}
   </form>
  );
}

export default Create;