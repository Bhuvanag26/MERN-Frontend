import React from "react";
import {motion} from 'framer-motion';
import { Link } from "react-router-dom";
const buttonVariants = {
    hover : {
      scale: 1.2,
      color: "#7114bc",
       textShadow:'0px 0px 8px ##5A20CB ' , 
       boxShadow:"0px 0px 8px #6718a8",
       transition: {
           duration: 0.2,
          
  
       }
    }
  
  }

const Footer = () =>  {
    return (
        <footer className="footer bg-dark mt-auto py-3">
        <div className="container-fluid bg-success text-white text-center py-3" style={{background : "linear-gradient(90deg, #6718a8 35%, #b033fa 100%)"}}>
          <h4>If you got any questions, feel free to reach out!</h4>
  
          <Link to="/Contact">
          {/* <button className="btn btn-warning btn-lg">Contact Us</button> */}
          <motion.button 
                          variants={buttonVariants}
                          animate="visible"
                          whileHover="hover"
                          className="btn btn-dark btn-lg">Contact Us
                          </motion.button>
          
          </Link>
        </div>
        <div className="container">
          <span className="text-muted">
            HOMEGROWN <span className="text-white">INDIAN</span> BRAND
          </span>
        </div>
      </footer>
    )
}


export default Footer;