import React , {useState , useEffect} from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";
import { getProducts } from "./helper/coreapicalls";
import {motion} from 'framer-motion';
import {  AiOutlineWhatsApp} from 'react-icons/ai';
import Mycarousalcomponent from "../mycarousal/mycarousal.component";










const nextVariants = {
  hidden: {
    x: '100vw'
  },
  visible: {
    x: 0,
    transition: { type: 'spring' , mass: 0.4, damping: 8, when: 'beforeChildren'}

  }
}
const childVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity :1
  }
}


const textvaraints = {
  
  initial : {
      opacity : 0.3
  },

  visible : {  
        opacity : 1,
        transition : {
          duration : 0.8,
          yoyo : Infinity,
          
          
        }
  }
  
}

export default function Home() {
 
  const [products , setProducts] = useState([])
  const [error , setError] = useState(false)
  
  const loadAllProduct = () => {
    getProducts().then(data => {
      if(data.error) {
        setError(data.error);
      } else {
        setProducts(data);
      }
    });
  };
  useEffect(() => {
    loadAllProduct()
   
    
  }, [])





  return (

    <Base title="Home Page" description="Welcome to the Tshirt Store">



      <Mycarousalcomponent />

      
      

      
    
      
    
     
     
    
     
     
     
      {/* <motion.div variants={nextVariants} initial="hidden" animate="visible">
        <div style={{color:"#7000FF", fontSize : "30px"}} className="text"><h2>Hey There :D</h2> <motion.div variants={childVariants}>grab your awesome T-Shirts</motion.div></div>
         </motion.div> */}
         

         <motion.h1
                 className="mb-5 edit-contactus" 
                 variants={textvaraints}
                 initial="initial"
                    animate="visible"
                 style={{fontSize : "80px",borderRadius : "20px", background : "linear-gradient(90deg, #650681 35%, #b033fa 100%)", color : "white" , marginTop: "100px"}}> 
                  Customized T-Shirt Now Available
                 {/* <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="mb-3 bi bi-shop" viewBox="0 0 16 16">
  <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z"/>
</svg> */}
</motion.h1>

        
        {/* <p style={{color:"#7000FF", fontSize : "30px"}}>Hey There, <br /> grab your awesome T-Shirts.</p> */}
      
      <div className="row text-center">
        {/* <motion.h1 animate = {{fontSize:100}} > ALL OF TSHIRTS</motion.h1> */}
      

        <div className="row-1">
          
          {products.map((product , index) => {
            return(
              <div key={index} className="col-4 mb-4">
                <Card  product={product}/>
                </div>
              
            )
          })}
        </div>
      </div>
      
    
      
    </Base>
  
  );
}
// className="text-white"