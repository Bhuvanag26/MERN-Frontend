
import React from "react";
import Menu from "./Menu";
import {motion} from 'framer-motion';
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";



const buttonVariants = {
  hover : {
    scale: 1.5,
    color: "rgb(255, 255, 0)",
     textShadow:'0px 0px 8px #ff1a1a' , 
     boxShadow:"0px 0px 8px rgb(255, 26, 26)",
     transition: {
         duration: 0.3,
         yoyo:Infinity

     }
  }

}



const Base = ({
  title = "My Title",
  description = "My desription",
  className = "bg-dark text-white p-4",
  children
}) => (
  <div>
    <Menu />
    <div className="container-fluid">
      <div className="jumbotron bg-dark text-white text-center">
        <motion.h2 animate={{scale: 1.5, color: '#046D29' , }}>{title}</motion.h2>
        <p className="lead">{description}</p>
      </div>
      <div className={className}>{children}</div>
    </div>
    <Footer />
  </div>
);
export default Base;
// className="display-4"