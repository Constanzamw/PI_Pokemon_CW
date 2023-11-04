/* eslint-disable no-unused-vars */
import styles from './Landing.module.css'
import React from "react";
import { Link } from 'react-router-dom';
import pokeLandingImage from "../../../assets/pokeLandingImage.jpg"



const Landing = () => {
    
    return (
        <div className={styles.landingContainer} style={{ backgroundImage: `url(${pokeLandingImage})` }} >
         
          <Link to="/login">
            <button className={styles.button} > Start </button>
          </Link>
          

         
        </div>
      );
}

export default Landing;

