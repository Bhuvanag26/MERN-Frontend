import React ,{useState} from "react"
import Base from "../core/Base"
import {Link , Redirect} from "react-router-dom"
import {signin , authenticate , isAuthenticated} from "../auth/helper"
import { motion } from "framer-motion";


const nextVariants = {
    hidden: {
      x: '-100vw'
    },
    visible: {
      x: 0,
      transition: { type: 'spring' , delay:0.5}
  
    }
  }

  const buttonVariants = {
      hover : {
        scale: 1.1,
        color: "#550385",
     textShadow:'0px 0px 8px ' , 
     boxShadow:"0px 0px 8px 050505",
         transition: {
             duration: 0.3,
             yoyo:Infinity

         }
      }

  }


const Signin = () => {

    const [values, setValues] = useState({
        email: "",
        password: "",
        error: "",
        loading: false,
        didRedirect: false
    })
    const {email, password, error , loading , didRedirect} = values;
    const {user} = isAuthenticated();
    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
      };
      const onSubmit = event => {
          event.preventDefault();
          setValues({...values, error: false, loading:true})
          signin({email , password})
          .then(data => {
              if(data.error) {
                  setValues({...values , error: data.error, loading:false})
              
              } else {
                  authenticate(data , () => {
                      setValues({
                          ...values,
                          didRedirect: true
                      });
                  });
              }
          })
          .catch(console.log("Signin request failed"));
      };

      const performRedirect = () => {
    
          if(didRedirect) {
              if(user && user.role ===1) {
                  return <Redirect to="/admin/dashboard" />;


              } else {
                  return <Redirect to="/user/dashboard" />;
              }
          }
          if(isAuthenticated()) {
              return <Redirect to="/" />;
          }
      };
      const loadingMessage = () => {
          return(
              loading && (
                  <div className="alert alert-info">
                      <h2>Loading...</h2>
                  </div>
              )

          );
      };
    const errorMessage = () => {
        return(
            <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
        <div className="alert alert-danger"
        style={{display: error ? "" : "none"}}
        >
        {error}
        </div>
        </div>
        </div>
        );
      }
    
    

    const signInForm = () => {

        return(
            <div className ="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <motion.form variants={nextVariants} initial="hidden" animate="visible">
                        
                        <div className="form-group">
                            <label  className="text-light">Email</label>
                            <input onChange={handleChange("email")} value={email} className="form-control" type="Email" />
                        </div>
                        <div className="form-group">
                            <label  className="text-light">Password</label>
                            <input  onChange={handleChange("password")} value={password} className="form-control" type="Password" />
                        </div>
                        <motion.button onClick={onSubmit} 
                        variants={buttonVariants}
                        animate="visible"
                        whileHover="hover"
                        className="btn btn-success btn-block"  style={{background : "#6718a8", borderRadius : "50px", color : "white", height : "50px", borderColor :"white", borderWidth : "2px", fontSize : "20px", fontWeight : "bold"}}>Submit
                        </motion.button>
                        
                    </motion.form>
                </div>


            </div>
        )
    }
    return (
        <Base title = "SignIn page" description= "A page for user to signIn">
            {loadingMessage()}
            {errorMessage()}
            {signInForm()}
            {performRedirect()}
            
            
        </Base>
    );
};


export default Signin;
