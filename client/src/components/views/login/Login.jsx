/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import {useState , useEffect} from "react";
import validationLogin from "../../../Utils/validationLogin"
import style from "./login.module.css"
import { createUser, login } from "../../../reudx/actions/actions";
import {useDispatch, useSelector} from "react-redux"
import { useNavigate } from "react-router-dom";



const FormLogin = () => {
    const[userData, setUserData] = useState({
        email:"" ,
        password:""
    });
    const [register, setRegister] = useState(false)
    const user = useSelector((state) => state.user);
    const[errors, setErrors] = useState({})
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleChange = (event) => { 
        setUserData({
            ...userData,
            [event.target.name] : event.target.value,
        })                     
    };

    const handleSubmit = (event) =>{
        event.preventDefault(); 
        dispatch(login(userData))
    }
    const registerOn = () => {
        setRegister(true);
    };

    const registerHandler = (event) => {
        event.preventDefault();
        dispatch(createUser(userData))
        setRegister(false);
        
    };

    useEffect(() => {    //  uso useEffect --> esto va a suceder cuando cambie ele stado user data, le doy tiempo digamos.
        if(userData.email !== "" || userData.password !== "") {
        const userValidated = validationLogin(userData); 
        setErrors(userValidated);  
        }
    }, [userData]);

    const backLogin = () => {
        setRegister(false);
    }

    useEffect(() => {
        if (user) {
          navigate("/home");
        }
    }, [user, dispatch, navigate]);


    return(

    register === false ?
    <form onSubmit={handleSubmit} >
      <div className={style.container} >
      <p className={style.title} > LOGIN </p>
        <div className={style.email}>
                <label htmlFor="emalil"> Email: </label>
                <input 
                    name = "email"
                    type = "email"
                    placeholder = "Enter email"
                    value = {userData.email}  
                    onChange = {handleChange}  
                /> 
                {errors.email && <p className={style.errors}>{errors.email} </p> }
                <br/><br/> 
        </div>       
        <div className={style.pass}>  
            <label htmlFor="password"> Password: </label>
                <input 
                    name ="password"
                    type = "password"
                    placeholder = "Enter password"
                    value = {userData.password}
                    onChange = {handleChange}  
                />
                {errors.password && <p className={style.errors}>{errors.password} </p> }
                <br/><br/> 
        </div>   
        </div>     
        <button type="submit" disabled={ userData.email==="" || userData.password==="" || errors.email || errors.password }> LOGIN </button>
        <div >
        <span > Create your account to enter the pokemon world! </span>
        <button  onClick={registerOn}> REGISTER HERE</button>
        </div>
        </form>
        : <form onSubmit={registerHandler}>
        <div >
        <div className={style.email}>
            <label htmlFor="emalil"> Email: </label>
                <input 
                    name = "email"
                    type = "email"
                    placeholder = "Enter your email"
                    value = {userData.email}  
                    onChange = {handleChange}  
                /> 
            {errors.email && <p className={style.errors}>{errors.email} </p> }
            <br/><br/>  
        </div>    
        <div className={style.pass}> 
            <label htmlFor="password"> Password: </label>
                <input 
                    name ="password"
                    type = "password"
                    placeholder = "Enter password"
                    value = {userData.password}
                    onChange = {handleChange}  
                />
            {errors.password && <p className={style.errors}>{errors.password} </p> }
            <br/><br/>
        </div> 
        <div className={style.botones}>
        <button type="submit" className={style.boton1}> Register </button> 
        {/* <button className={style.boton} onClick={backLogin}>Login</button> */}
        </div> 
        </div> 
             
        </form>    
       
        
    )
};

export default FormLogin;
