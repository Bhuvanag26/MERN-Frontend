import React from 'react'
import Base from '../core/Base'
import {isAuthenticated} from "../auth/helper/index"
import {motion} from "framer-motion"
import { Link } from 'react-router-dom'
import img4 from '../images/merch.png'
import "../styles.css";
import Zoom from 'react-reveal/Zoom';
import LightSpeed from 'react-reveal/LightSpeed';



const UserDashBoard = () => {

    const {user : {name,email,role}} = isAuthenticated();

    const buttonvaraints = {
  
        hover : {
          scale : 1.1,
              textShadow:"0px 0px 8px #693cb6",
              boxShadow:"0px 0px 8px rgb(255,255,255)",
              transition : {
                duration : 0.3,
                yoyo : Infinity
                
              }
        }
        
      }


    return (
        <Base title="" description="">
            <div  className="row">
            <div className="col-6">
                <img src={img4} height="550" width="550" style={{borderRadius : "50%"}} />
                
            </div>
            <div className="col-6">
            <Zoom>
            <h1 className="mt-5" style={{color : "#f8f9fa", fontSize : "40px", textAlign : "right"}}>Hi, {name}</h1>
          
        </Zoom>
        <LightSpeed>
        <p style={{color:"#ffffff", fontSize : "30px", textAlign : "right"}}>Welcome to The ComfyTee, <br /> There are Amazing T-Shirts <br /> waiting for you.
        
        </p>
        </LightSpeed>
            
        

        


        <Link
        className="ml-5"
        to="/"><motion.button 
        variants={buttonvaraints}
            whileHover="hover"
            style={{ height : "60px" , width : "550px", borderRadius : "50px",borderColor : "white", background : "#6c1d9a" , color : "white",  fontWeight : "bold"}}>Start Shopping
            &nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" fill="currentColor" class="bi bi-bag-fill" viewBox="0 0 16 16">
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
</svg>
        
            </motion.button>
        </Link>
        
            </div>


            </div>
        </Base>
    )
}

export default UserDashBoard;